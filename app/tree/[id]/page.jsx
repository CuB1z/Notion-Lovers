import styles from "@styles/pages/contentPage.module.css"
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
            <div className={styles.notion_container}>
                <NotionPage recordMap={content} rootPageId={id} />
            </div>
        </ContentLayout>
    )
}