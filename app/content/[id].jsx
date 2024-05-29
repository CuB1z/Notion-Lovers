import Layout from "@/layouts/Layout"
import { getPages } from "@/utils/notion"

export async function getStaticPaths() {
    const pages = await getPages()

    // Log the pages to check if they're in the expected format
    console.log(pages)

    const paths = pages.map((page) => {
        // Ensure that page.title exists and is unique
        if (!page.title) {
            console.error('Page title is missing:', page)
        }

        return {
            params: { id: page.title },
        }
    })

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const pages = await getPages()
    const page = pages.find((page) => page.title === params.id)

    return { props: { page } }
}

export default function Page({ page }) {
    <Layout>
        <h1>{page.title}</h1>
        <section className="content">
            <p>Este es el contenido de la página.</p>
        </section>
    </Layout>
}