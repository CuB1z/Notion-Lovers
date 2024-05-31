import styles from "@styles/components/SocialCard.module.css"

export default function SocialCard({ name, github, linkedin}) {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>{name}</h1>
            <div className={styles.links}>
                <a className={styles.link_element} href={linkedin} target="_blank">
                    <img
                        className={styles.img}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                        alt={"Linkedin Logo"}
                    />
                </a>
                <a className={styles.link_element} href={github} target="_blank">
                    <img
                        className={styles.img}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt={"GitHub Logo"}
                    />
                </a>
            </div>
        </section>

    )
}