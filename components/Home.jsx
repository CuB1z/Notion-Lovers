import styles from "@styles/components/Home.module.css"
import Image from "next/image"
import { SITE_TITLE, AVAILABLE_PAGES } from "@/utils/constants"
import Arrow from "@components/svg/Arrow"
import LinkButton from "@components/LinkButton"

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.text_section}>
                <h1 className={styles.h1}>Bienvenido a {SITE_TITLE}</h1>
                <p className={styles.p}>
                    En {SITE_TITLE} te ofrecemos una serie de contenido en línea relacionado
                    con la URJC y la Ingeniería Software.
                </p>
                <div className={styles.button_section}>
                    <LinkButton secondary url={AVAILABLE_PAGES.contribute.url}>Contribuir</LinkButton>
                    <LinkButton url={AVAILABLE_PAGES.notes.url}>Ver apuntes</LinkButton>
                </div>
            </div>
            <div className={styles.image_section}>
                <Image
                    className={`${styles.img} ${styles.logo}`}
                    src="/assets/heart.svg"
                    alt="Heart"
                    width={400}
                    height={400}
                />
            </div>
            <div className={styles.scroll_down}>
                <Arrow size={48} />
            </div>
        </section>
    )
}