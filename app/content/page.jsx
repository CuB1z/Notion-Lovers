import styles from "@styles/pages/content.module.css"
import Layout from "@/layouts/Layout"
import Card from "@/components/Card"

export default async function Page() {
    const response = await fetch(`${process.env.PUBLIC_API_URL}`)
    const data = await response.json()
    data.sort((a, b) => a.tag.name.localeCompare(b.tag.name))

    return (
        <Layout>
            <main className={styles.main}>
                <h1>Contenido</h1>
                <hr />
                <section className={styles.content}>
                    {
                        data.map((page) => {
                            return (
                                <Card
                                    key={page.id}
                                    title={page.title}
                                    tag={page.tag.name}
                                    id={page.id}
                                />
                            )
                        })
                    }
                </section>

            </main>
        </Layout>
    )
}