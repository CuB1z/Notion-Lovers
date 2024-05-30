import { getChildDatabasePages, getPages, getPageContent } from "@/utils/notion"
import { NotionPage } from "@/components/notion/renderer"

// This function gets called at build time on server-side.
export async function getStaticPaths() {
    const pages = await getPages()
    for (const page of pages) {
        if (!page.id) continue
        const childPages = await getChildDatabasePages(page.id)
        for (const childPage of childPages) {
            pages.push({
                id: page.id,
                subid: childPage.id,
            })
        }
    }

    const paths = pages.map((page) => {
        return { params: { id: page.id, subid: page.subid } }
    })

    return { paths, fallback: false }
}

export default async function Page({ params }) {
    const id = params.subid
    const content = await getPageContent(id)

    return (
        <NotionPage recordMap={content} rootPageId={id} />
    )
}