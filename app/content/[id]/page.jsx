import GridLayout from "@components/GridLayout"
import { getChildDatabasePages, getPageTitle } from "@/utils/notion"

export default async function Page({ params }) {
    const id = params.id
    const [data, title] = await Promise.all([getChildDatabasePages(id), getPageTitle(id)])

    return (
        <GridLayout data={data} title={title} backUrl={"/content"}/>
    )
}