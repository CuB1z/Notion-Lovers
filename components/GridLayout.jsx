import styles from "@styles/components/GridLayout.module.css"
import Layout from "@/layouts/Layout"
import Card from "@/components/Card"
import LinkButton from "./LinkButton"

export default async function GridLayout({ data, title, backUrl }) {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.title_section}>
                    <h1>{title}</h1>
                    <LinkButton url={backUrl} color={"black"}>
                        <div className={styles.button_content}>
                            <img src="/assets/back-arrow.svg" alt="Back Arrow" />
                            <span>Volver</span>
                        </div>
                    </LinkButton>
                </div>
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