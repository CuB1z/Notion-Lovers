import ContentLayout from "@/layouts/ContentLayout"
import Custom404 from "@/components/404"
import { NotionPage } from "@/components/notion"
import { getPageContent } from "@/utils/notion"

export default async function Page({ params }) {
    const id = params.id
    const content = await getPageContent(id)

    if (!content) {
        return <Custom404 />
    }

    return (
        <ContentLayout isTree>
            <NotionPage recordMap={content} rootPageId={id}/>
        </ContentLayout>
    )
}