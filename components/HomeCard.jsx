import styles from "@styles/components/HomeCard.module.css"
import Image from "next/image"

export default function HomeCard({ title, description, image, imageSide, children }) {
    let condition = imageSide === "left" ? "reverse" : ""

    return (
        <section className={`${styles.section} ${styles[condition]}`}>
            <div className={styles.text_section}>
                <h1 className={styles.h1}>{title}</h1>
                <p className={styles.p}>{description}</p>
                {children}
            </div>
            <div className={`${styles.image_section} ${styles[condition]}`}>
                <Image
                    className={styles.img}
                    src={image}
                    alt={title}
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}