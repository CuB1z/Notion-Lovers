"use server"
import { Client } from '@notionhq/client'

const notionSecret = process.env.NOTION_SECRET
const notionDatabaseId = process.env.NOTION_DATABASE_ID

const notion = new Client({
    auth: notionSecret,
})

async function getPages() {
    const query = await notion.databases.query({
        database_id: notionDatabaseId,
    })

    const pages = []
    for (const page of query.results) {
        pages.push({
            id: page.id,
            title: page.properties.title.title[0].plain_text,
            tag: {name: page.properties.tags.select.name, color: page.properties.tags.select.color},
        })
    }

    return pages
}

export { getPages }