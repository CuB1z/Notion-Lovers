import styles from "@styles/components/HomeCard.module.css"

export default function HomeCard({ title, description, image, imageSide, children }) {
    let imagePosition = imageSide === "left" ? "row-reverse" : "row"
    let justify = imageSide === "left" ? "flex-start" : "flex-end"

    return (
        <section className={styles.section} style={{ flexDirection: imagePosition }}>
            <div className={styles.text_section}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.p}>{description}</p>
                {children}
            </div>
            <div className={styles.image_section} style={{ justifyContent: justify }} >
                <img className={styles.img} src={image} alt={title} />
            </div>
        </section>
    )
}