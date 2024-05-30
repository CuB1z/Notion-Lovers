"use server"
import { Client } from '@notionhq/client'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
    auth: notionSecret,
})

// Create a cache object at the top of your file
const cache = {}

// Function to retrieve the pages of the database with the given id (or the default one [root database])
async function getPages(id) {
    // Use the cached data if it exists
    if (cache[id || notionDatabaseId]?.content) {
        return cache[id || notionDatabaseId].content
    } else {
        cache[id || notionDatabaseId] = {
            content: null,
            title: null,
        }
    }

    // Retrieve the pages of the database
    const query = await notion.databases.query({ database_id: id || notionDatabaseId })

    // Extract the data from the response
    const pages = []
    for (const page of query.results) {
        pages.push({
            id: page.id,
            title: page.properties.title?.title[0].plain_text || "Untitled",
            tag: {
                name: page.properties.tag?.select.name || "Unnamed",
                color: page.properties.tag?.select.color || "gray",
            },
            url: id ? `/content/${id}/${page.id}` : `/content/${page.id}`,
        })
    }

    // Store the data in the cache
    cache[id || notionDatabaseId].content = pages

    return pages
}

// Function to retrieve the pages of child databases from a given page id 
async function getChildDatabasePages(id) {
    // Use the cached data if it exists
    if (cache[id]?.content) {
        return cache[id].content
    } else {
        cache[id] = {
            content: null,
            title: null,
        }
    }

    // Retrieve blocks of the given page
    const page = await notion.blocks.children.list({ block_id: id })

    // Filter the child databases from the blocks
    const childDataBases = page.results.filter((block) => block.type === 'child_database')

    // Retrieve the pages of each child database and concatenate them
    let pages = []
    for (const childDataBase of childDataBases) {
        const query = await getPages(childDataBase.id)
        pages = [...pages, ...query]
    }

    // Store the data in the cache
    cache[id].content = pages

    return pages
}

// Function to retrieve the title of a page with a given id
async function getPageTitle(id) {
    // Use the cached data if it exists
    if (cache[id]?.title) {
        return cache[id].title
    } else {
        cache[id] = {
            content: null,
            title: null,
        }
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
    // Use the cached data if it exists
    if (cache[id]) {
        return cache[id]
    } else {
        cache[id] = {
            content: null,
            title: null,
        }
    }

    const page = await notion.pages.retrieve({ page_id: id })

    // Store the data in the cache
    cache[id] = page

    return page
}

export { getPages, getChildDatabasePages, getPageTitle, getPageContent }