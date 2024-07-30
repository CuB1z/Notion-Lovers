import styles from "@styles/components/GridLayout.module.css"
import Layout from "@/layouts/Layout"
import Image from "next/image"
import DataSection from "@components/DataSection"
import LinkButton from "@components/LinkButton"

export default async function GridLayout({ data, title, backUrl }) {
    return (
        <Layout>
            <main className={styles.main}>
                <div className={styles.title_section}>
                    <h1>{title}</h1>
                    <LinkButton url={backUrl} color={"var(--back-button-color)"}>
                        <div className={styles.button_content}>
                            <Image src={"/assets/back-arrow.svg"} alt="Back Arrow" width={20} height={20} />
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
                                    key={section.childId}
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