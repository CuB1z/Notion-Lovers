import styles from "@styles/components/Card.module.css"
import LinkButton from "@components/LinkButton"

export default function Card({ title, tag, url, description, color }) {
    console.log(color)
    return (
        <div className={styles.item}>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.p}>{description}</p>
            <div className={styles.button_container}>
                <span className={`${styles.tag} ${styles[color]}`}>{tag}</span>
                <LinkButton url={url}>Ver más</LinkButton>
            </div>
        </div>
    )
}