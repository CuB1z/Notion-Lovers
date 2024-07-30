import styles from "@styles/components/LoadingScene.module.css"
import Image from "next/image"
import { SITE_TITLE } from "@utils/constants"

export default function LoadingScene() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{SITE_TITLE}</h1>
            <p className={styles.subtitle}>Estamos trayendo tus apuntes...</p>
            <Image
                className={styles.img}
                src="/assets/heart.svg"
                alt="Loading"
                width={50}
                height={50}
            />
        </div>
    )
}