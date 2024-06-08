import styles from "@styles/components/DataSection.module.css"
import Card from "@components/Card"

export default function DataSection({ title, content }) {
    if (content.length === 0) return <></>

    return (
        <section className={styles.section}>
            {
                title &&
                <>
                    <div className={styles.title_section}>
                        <h2>{title}</h2>
                    </div>
                </>
            }
            <div className={styles.content}>
                {
                    content.map((element) => {
                        return (
                            <Card
                                key={element.id}
                                title={element.title}
                                description={element.description}
                                tag={element.tag?.name}
                                color={element.tag?.color}
                                id={element.id}
                                url={element.url}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}