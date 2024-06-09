import styles from "@styles/pages/contentPage.module.css"
import { getPageContent, getPages } from "@/utils/notion"
import { AVAILABLE_PAGES } from "@/utils/constants"
import { NotionPage } from "@/components/notion/renderer"
import ContentLayout from "@/layouts/ContentLayout"

export default async function Page({ params }) {
    const id = params.id
    const subid = params.subid
    const [pages, content] = await Promise.all([getPages(), getPageContent(subid)])

    return (
        <ContentLayout backUrl={`${AVAILABLE_PAGES.notes.url}/${id}`} pages={pages}>
            <div className={styles.notion_container}>
                <NotionPage recordMap={content} rootPageId={subid} />
            </div>
        </ContentLayout>
    )
}