import { getPages, getChildDatabasePages, getPageTitle, getPageContent } from "@/utils/notion"
import fs from "fs"

export default async function script() {
    const topLevelPages = await getPages()
    const data = []
    for (const page of topLevelPages) {
        let formattedData = {
            id: page.id,
            header: {
                title: page.title,
                description: page.description,
                tag: page.tag,
                url: page.url
            },
            children: []
        }
        const childPages = await getChildDatabasePages(page.id)
        for (const childPage of childPages) {
            const title = await getPageTitle(childPage.id)
            const content = await getPageContent(childPage.id)
            formattedData.children.push({
                id: childPage.id,
                title: title,
                description: childPage.description,
                tag: childPage.tag,
                content: content
            })
        }

        data.push(formattedData)
    }

    //Write formatted data to a javascript file in public folder exporting const data
    fs.writeFileSync("./data.js", `export const data = ${JSON.stringify(data, null, 4)}`)
}