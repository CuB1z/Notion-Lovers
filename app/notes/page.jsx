import GridLayout from "@components/GridLayout"
import { getPages } from "@/utils/notion"
import { AVAILABLE_PAGES } from "@/utils/constants"

export default async function Page() {
    const data = await getPages()

    return (
        <GridLayout data={data} title="📚 Contenido" backUrl={AVAILABLE_PAGES.root.url} />
    )
}