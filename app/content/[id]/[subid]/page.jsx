import { getChildDatabasePages, getPages, getPageContent } from "@/utils/notion"
import { NotionPage } from "@/components/notion/renderer"
import Layout from "@/layouts/Layout"

export default async function Page({ params }) {
    const id = params.subid
    const content = await getPageContent(id)

    return (
        <Layout>
            <NotionPage recordMap={content} rootPageId={id} />
        </Layout>
    )
}