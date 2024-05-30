import GridLayout from "@components/GridLayout"
import { getChildDatabasePages, getPages, getPageTitle } from "@/utils/notion"

// This function gets called at build time on server-side.
export async function getStaticPaths() {
    const pages = await getPages()

    const paths = pages.map((page) => {
        return { params: { id: page.id } }
    })

    return { paths, fallback: false }
}

export default async function Page({ params }) {
    const id = params.id
    const data = await getChildDatabasePages(id)
    const title = await getPageTitle(id)

    return (
        <GridLayout data={data} title={title}/>
    )
}