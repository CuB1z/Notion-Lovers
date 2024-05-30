import GridLayout from "@components/GridLayout"

export default async function Page() {
    const response = await fetch(`${process.env.PUBLIC_API_URL}`)
    const data = await response.json()
    data.sort((a, b) => a.tag.name.localeCompare(b.tag.name))

    return (
        <GridLayout data={data} title="Contenido" />
    )
}