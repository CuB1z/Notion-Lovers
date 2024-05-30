import GridLayout from "@components/GridLayout"
import { getChildDatabasePages, getPages, getPageTitle } from "@/utils/notion"

export default async function Page({ params }) {
    const id = params.id
    const data = await getChildDatabasePages(id)
    const title = await getPageTitle(id)

    return (
        <GridLayout data={data} title={title}/>
    )
}