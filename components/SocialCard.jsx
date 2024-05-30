import styles from "@styles/components/SocialCard.module.css"
import Image from "next/image"

export default function SocialCard({ name, github, linkedin}) {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>{name}</h1>
            <div className={styles.links}>
                <a className={styles.link_element} href={linkedin} target="_blank">
                    <Image
                        className={styles.img}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
                        alt={"Linkedin Logo"}
                        width={50}
                        height={50}
                        />
                </a>
                <a className={styles.link_element} href={github} target="_blank">
                    <Image
                        className={styles.img}
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                        alt={"GitHub Logo"}
                        width={50}
                        height={50}
                    />
                </a>
            </div>
        </section>

    )
}