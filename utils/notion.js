"use server"
import { Client } from '@notionhq/client'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
    auth: notionSecret,
})

async function getPages(id) {
    const query = await notion.databases.query({ database_id: id || notionDatabaseId })

    const pages = []
    for (const page of query.results) {
        pages.push({
            id: page.id,
            title: page.properties.title?.title[0].plain_text || "Untitled",
            tag: {
                name: page.properties.tag?.select.name || "Unnamed",
                color: page.properties.tag?.select.color || "gray",
            },
        })
    }

    return pages
}

async function getChildDatabasePages(id) {
    const page = await notion.blocks.children.list({ block_id: id })
    const childDataBases = page.results.filter((block) => block.type === 'child_database')
    let pages = []

    // Retrieve the pages of each child database
    for (const childDataBase of childDataBases) {
        const query = await getPages(childDataBase.id)
        pages = [...pages, ...query]
    }

    return pages
}

export { getPages, getChildDatabasePages }