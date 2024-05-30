import styles from "@styles/components/Home.module.css"
import Image from "next/image"
import { SITE_TITLE } from "@/utils/constants"

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.text_section}>
                <h1 className={styles.h1}>Bienvenido a {SITE_TITLE}</h1>
                <p className={styles.p}>
                    En {SITE_TITLE} te ofreceremos una serie de contenido en línea relacionado
                    con la URJC y la Ingeniería Software.
                </p>
            </div>
            <div className={styles.image_section}>
                <Image
                    className={`${styles.img} ${styles.logo}`}
                    src={"/assets/heart.svg"}
                    alt={"Heart"}
                    width={100}
                    height={100}
                />
            </div>
            <div className={styles.scroll_down}>
                <Image
                    className={styles.img}
                    src={"/assets/arrow.png"}
                    alt={"Scroll Down Indicator"}
                    width={50}
                    height={50}
                />
            </div>
        </section>
    )
}