"use server"
import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { CACHE_LIFE_TIME } from './constants'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notionContributorsSecret = process.env.NOTION_CONTRIBUTORS_SECRET
const notionContributorsDatabaseId = process.env.NOTION_CONTRIBUTORS_DATABASE_ID

if (!notionSecret || !notionDatabaseId) {
    throw new Error("Environment variables NOTION_SECRET and NOTION_DATABASE_ID must be set.")
}

const notionAPI = new NotionAPI()

const notion = new Client({
    auth: notionSecret,
})

// Retrieve data from Notion Content Database
const cache = {}

function getDatabaseId(id) {
    return id || notionDatabaseId
}

function initializeCache(id) {
    if (!cache[id]) {
        cache[id] = {
            content: null,
            title: null,
            timestamp: Date.now(),
        }
    }
}

function isCacheExpired(id) {
    return Date.now() - cache[id].timestamp > CACHE_LIFE_TIME
}

async function getPages(id, parentId = null) {
    const databaseId = getDatabaseId(id)
    initializeCache(databaseId)

    if (cache[databaseId].content && !isCacheExpired(databaseId)) {
        return cache[databaseId].content
    }

    try {
        const query = await notion.databases.query({
            database_id: databaseId,
            filter: {
                property: "status",
                status: {
                    equals: "PUBLISHED"
                }
            }
        })

        const pages = query.results.map(page => ({
            id: page.id,
            title: `${page.icon?.emoji || "📄"} ${page.properties.title?.title[0].plain_text || "Untitled"}`,
            description: page.properties.description?.rich_text[0]?.plain_text || "No description",
            tag: {
                name: page.properties.tag?.select.name || "Unnamed",
                color: page.properties.tag?.select.color || "gray",
            },
            url: id ? `/content/${parentId || id}/${page.id}` : `/content/${page.id}`,
        })).sort((a, b) => {
            // Sort by tag name first, then by title
            if (a.tag.name === b.tag.name) return a.title.localeCompare(b.title)
            return a.tag.name.localeCompare(b.tag.name)
        })

        cache[databaseId].content = pages
        cache[databaseId].timestamp = Date.now()

        return pages
    } catch (error) {
        console.error(`Failed to get pages: ${error}`)
    }
}

async function getChildDatabasePages(id) {
    initializeCache(id)

    if (cache[id].content && !isCacheExpired(id)) {
        return cache[id].content
    }

    try {
        const page = await notion.blocks.children.list({ block_id: id })
        const childDataBases = page.results.filter((block) => block.type === 'child_database')
        const pagePromises = childDataBases.map(async (childDataBase) => {
            const res = await getPages(childDataBase.id, id)
            return {
                childId: childDataBase.id,
                title: childDataBase.child_database.title,
                content: res
            }
        })

        const pages = await Promise.all(pagePromises)

        cache[id].content = pages
        cache[id].timestamp = Date.now()

        return pages
    } catch (error) {
        console.error(`Failed to get child database pages: ${error}`)
    }
}

async function getPageTitle(id) {
    initializeCache(id)

    if (cache[id].title && !isCacheExpired(id)) {
        return cache[id].title
    }

    try {
        const page = await notion.pages.retrieve({ page_id: id })
        const title = page.properties.title?.title[0].plain_text || "Untitled"
        const emoji = page.icon?.emoji || "📄"

        cache[id].title = `${emoji} ${title}`
        cache[id].timestamp = Date.now()

        return title
    } catch (error) {
        console.error(`Failed to get page title: ${error}`)
    }
}

async function getPageContent(id) {
    initializeCache(id)

    if (cache[id].content && !isCacheExpired(id)) {
        return cache[id].content
    }

    try {
        const content = await notionAPI.getPage(id)

        cache[id].content = content
        cache[id].timestamp = Date.now()

        return content
    } catch (error) {
        console.error(`Failed to get page content: ${error}`)
    }
}

// Insert data into Notion Contributors Database
const contributorsClient = new Client({
    auth: notionContributorsSecret,
})

async function insertContributorData(data) {
    const maxContentLength = 2000
    const contentBlocks = []

    for (let i = 0; i < data.content.length; i += maxContentLength) {
        const contentChunk = data.content.substring(i, i + maxContentLength)
        contentBlocks.push({
            object: "block",
            type: "paragraph",
            paragraph: {
                rich_text: [
                    { type: "text", text: { content: contentChunk } }
                ]
            }
        })
    }

    await contributorsClient.pages.create({
        parent: { database_id: notionContributorsDatabaseId },
        properties: {
            title: { title: [{ type: "text", text: { content: data.title } }] },
            url: { type: "url", url: data.url },
            name: { type: "rich_text", rich_text: [{ type: "text", text: { content: data.name } }] },
        },
        children: contentBlocks
    })
}

export { getPages, getChildDatabasePages, getPageTitle, getPageContent, insertContributorData }