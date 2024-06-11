import styles from "@styles/components/Home.module.css"
import { SITE_TITLE } from "@/utils/constants"
import Arrow from "@components/svg/Arrow"

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.text_section}>
                <h1 className={styles.h1}>Bienvenido a {SITE_TITLE}</h1>
                <p className={styles.p}>
                    En {SITE_TITLE} te ofrecemos una serie de contenido en línea relacionado
                    con la URJC y la Ingeniería Software.
                </p>
            </div>
            <div className={styles.image_section}>
                <img
                    className={`${styles.img} ${styles.logo}`}
                    src={"/assets/heart.svg"}
                    alt={"Heart"}
                />
            </div>
            <div className={styles.scroll_down}>
                <Arrow size={48}/>
            </div>
        </section>
    )
}