import styles from "@styles/components/SocialCard.module.css"
import LinkedIn from "@components/svg/LinkedIn"
import GitHub from "@components/svg/GitHub"

export default function SocialCard({ name, github, linkedin}) {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>{name}</h1>
            <div className={styles.links}>
                <a className={styles.link_element} href={linkedin} target="_blank">
                    <LinkedIn />
                </a>
                <a className={styles.link_element} href={github} target="_blank">
                    <GitHub />
                </a>
            </div>
        </section>

    )
}