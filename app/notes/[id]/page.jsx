import GridLayout from "@components/GridLayout"
import { getChildDatabasePages, getPageTitle } from "@/utils/notion"
import { AVAILABLE_PAGES } from "@/utils/constants"

export default async function Page({ params }) {
    const id = params.id
    const [data, title] = await Promise.all([getChildDatabasePages(id), getPageTitle(id)])

    return (
        <GridLayout data={data} title={title} backUrl={AVAILABLE_PAGES.notes.url}/>
    )
}