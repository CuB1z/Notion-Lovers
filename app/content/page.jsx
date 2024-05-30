import GridLayout from "@components/GridLayout"
import { getPages } from "@/utils/notion"

export default async function Page() {
    const data = await getPages()
    data.sort((a, b) => a.tag.name.localeCompare(b.tag.name))

    return (
        <GridLayout data={data} title="Contenido" />
    )
}