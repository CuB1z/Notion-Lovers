import { getChildDatabasePages, getPages, getPageContent } from "@/utils/notion"
import { NotionPage } from "@/components/notion/renderer"
import Layout from "@/layouts/Layout"

// This function gets called at build time on server-side.
export async function getStaticPaths() {
    // Fetch all pages
    const pages = await getPages()

    // For each page, fetch its child pages
    const childPagesPromises = pages.map(async (page) => {
        if (!page.id) return []
        const childPages = await getChildDatabasePages(page.id)
        return childPages.map((childPage) => ({
            params: {
                id: page.id.toString(),
                subid: childPage.id.toString(),
            },
        }))
    })

    // Wait for all promises to resolve
    const childPagesArrays = await Promise.all(childPagesPromises)

    // Flatten the array of arrays into a single array
    const paths = childPagesArrays.flat()

    // Return the paths along with the fallback option
    return { paths, fallback: true }
}

export default async function Page({ params }) {
    const id = params.subid
    const content = await getPageContent(id)

    return (
        <Layout
            children={ <NotionPage recordMap={content} rootPageId={id} /> }>
        </Layout>
    )
}