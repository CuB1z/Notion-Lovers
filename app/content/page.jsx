import GridLayout from "@components/GridLayout"
import { getPages } from "@/utils/notion"

export default async function Page() {
    const data = await getPages()

    return (
        <GridLayout data={data} title="📚 Contenido" backUrl={"/"} />
    )
}