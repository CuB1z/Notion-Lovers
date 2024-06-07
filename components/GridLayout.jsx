import styles from "@styles/components/GridLayout.module.css"
import Layout from "@/layouts/Layout"
import DataSection from "@components/DataSection"
import LinkButton from "@components/LinkButton"

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
                {
                    !data[0].id ?
                    data.map((section) => {
                        return (
                            <DataSection
                                title={section.title}
                                content={section.content}
                            />
                        )
                    }) : <DataSection content={data} />
                }
            </main>
        </Layout>
    )
}