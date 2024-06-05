import "@styles/globals.css"
import styles from "@styles/components/404.module.css"

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.text_section}>
                <h1 className={styles.header}>404</h1>
                <p className={styles.paragraph}>Página no encontrada</p>
            </div>
            <div className={styles.image_section}>
                <img className={styles.img} src="/assets/broken-heart.svg" alt="Broken Heart" />
            </div>
        </div>
    )
}