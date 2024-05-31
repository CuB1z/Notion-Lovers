import styles from "@styles/components/GridLayout.module.css"
import Layout from "@/layouts/Layout"
import Card from "@/components/Card"

export default async function Page({ data, title }) {
    return (
        <Layout>
            <main className={styles.main}>
                <h1>{title}</h1>
                <hr />
                <section className={styles.content}>
                    {
                        data.map((element) => {
                            return (
                                <Card
                                    key={element.id}
                                    title={element.title}
                                    description={element.description}
                                    tag={element.tag.name}
                                    id={element.id}
                                    url={element.url}
                                />
                            )
                        })
                    }
                </section>
            </main>
        </Layout>
    )
}