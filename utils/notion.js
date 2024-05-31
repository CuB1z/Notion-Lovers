"use server"
import { Client } from '@notionhq/client'
import { NotionAPI } from 'notion-client'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notionAPI = new NotionAPI()

const notion = new Client({
    auth: notionSecret,
})

// Create a cache object at the top of your file
const cache = {}

// Helper function to get the database ID
function getDatabaseId(id) {
    return id || notionDatabaseId
}

// Helper function to initialize the cache
function initializeCache(id) {
    if (!cache[id]) {
        cache[id] = {
            content: null,
            title: null,
        }
    }
}

// Function to retrieve the pages of the database with the given id (or the default one [root database])
async function getPages(id) {
    const databaseId = getDatabaseId(id)
    initializeCache(databaseId)

    // Use the cached data if it exists
    if (cache[databaseId].content) {
        return cache[databaseId].content
    }

    // Retrieve the pages of the database
    const query = await notion.databases.query({ database_id: databaseId })

    // Extract the data from the response
    const pages = query.results.map(page => ({
        id: page.id,
        title: page.properties.title?.title[0].plain_text || "Untitled",
        description: page.properties.description?.rich_text[0]?.plain_text || "No description",
        tag: {
            name: page.properties.tag?.select.name || "Unnamed",
            color: page.properties.tag?.select.color || "gray",
        },
        url: id ? `/content/${id}/${page.id}` : `/content/${page.id}`,
        published: page.properties.status?.status.name === "PUBLISHED"
    })).filter(page => page.published)

    // Store the data in the cache
    cache[databaseId].content = pages

    return pages
}

// Function to retrieve the pages of child databases from a given page id 
async function getChildDatabasePages(id) {
    initializeCache(id)

    // Use the cached data if it exists
    if (cache[id].content) {
        return cache[id].content
    }

    // Retrieve blocks of the given page
    const page = await notion.blocks.children.list({ block_id: id })

    // Filter the child databases from the blocks
    const childDataBases = page.results.filter((block) => block.type === 'child_database')

    // Retrieve the pages of each child database in parallel and concatenate them
    const pagePromises = childDataBases.map(childDataBase => getPages(childDataBase.id))
    const pageArrays = await Promise.all(pagePromises)
    const pages = pageArrays.flat()

    // Store the data in the cache
    cache[id].content = pages

    return pages
}

// Function to retrieve the title of a page with a given id
async function getPageTitle(id) {
    initializeCache(id)

    // Use the cached data if it exists
    if (cache[id].title) {
        return cache[id].title
    }

    const page = await notion.pages.retrieve({ page_id: id })

    // Return the title of the page or "Untitled" if it doesn't have one
    const title = page.properties.title?.title[0].plain_text || "Untitled"

    // Store the data in the cache
    cache[id].title = title

    return title
}

// Function to retrieve the content of a page with a given id
async function getPageContent(id) {
    initializeCache(id)

    // Use the cached data if it exists
    if (cache[id].content) {
        return cache[id].content
    }

    const content = await notionAPI.getPage(id)

    // Store the data in the cache
    cache[id].content = content

    return content
}

export { getPages, getChildDatabasePages, getPageTitle, getPageContent }