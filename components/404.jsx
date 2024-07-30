import "@styles/globals.css"
import styles from "@styles/components/404.module.css"
import Image from "next/image"
import LinkButton from "@components/LinkButton"

export default function Custom404() {
    return (
        <div className={styles.container}>
            <div className={styles.text_section}>
                <h1 className={styles.header}>404</h1>
                <p className={styles.paragraph}>Página no encontrada</p>
            </div>
            <div className={styles.image_section}>
                <Image style={styles.img} src="/assets/broken-heart.svg" alt="Broken Heart" width={400} height={400} />
            </div>
            <div className={styles.button_section}>
                <LinkButton url="/">Volver al inicio</LinkButton>
            </div>
        </div>
    )
}