import styles from "@styles/pages/content.module.css"
import Layout from "@/layouts/Layout"

export default async function Page() {
    const response = await fetch(`${process.env.PUBLIC_API_URL}`)
    const data = await response.json()
    console.log(data)

    return (
        <Layout>
            <main className={styles.main}>
                <h1>Contenido</h1>
                <section className={styles.content}>
                    {
                        data.reverse().map((page) => {
                            return (
                                <div key={page.id}>
                                    <h2>{page.title}</h2>
                                    <ul>
                                        {
                                            <li key={page.tags.name} style={{ color: page.tags.color }}>
                                                {page.tags.name}
                                            </li>
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </section>

            </main>
        </Layout>
    )
}