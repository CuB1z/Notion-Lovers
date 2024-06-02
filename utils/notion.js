"use server"
import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'
import { CACHE_LIFE_TIME } from './constants'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

if (!notionSecret || !notionDatabaseId) {
    throw new Error("Environment variables NOTION_SECRET and NOTION_DATABASE_ID must be set.")
}

const notionAPI = new NotionAPI()

const notion = new Client({
    auth: notionSecret,
})

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
        })).sort((a, b) => a.tag.name.localeCompare(b.tag.name))

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
        const pagePromises = childDataBases.map(childDataBase => getPages(childDataBase.id, id))
        const pageArrays = await Promise.all(pagePromises)
        const pages = pageArrays.flat()

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

export { getPages, getChildDatabasePages, getPageTitle, getPageContent }