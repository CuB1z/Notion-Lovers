import styles from "@styles/pages/contentPage.module.css"
import { getPageContent } from "@/utils/notion"
import { NotionPage } from "@/components/notion/renderer"
import ContentLayout from "@/layouts/ContentLayout"

export default async function Page({ params }) {
    const id = params.subid
    const content = await getPageContent(id)

    return (
        <ContentLayout>
            <div className={styles.notion_container}>
                <NotionPage recordMap={content} rootPageId={id} />
            </div>
        </ContentLayout>
    )
}