import styles from "@styles/components/Footer.module.css"
import { SITE_TITLE } from "@/utils/constants"

export default function Footer() {
    const today = new Date()
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <span>&copy; {today.getFullYear()} {SITE_TITLE}.</span>
                <span className={styles.cool_text}>Made with ❤️ by {SITE_TITLE}</span>
            </div>
        </footer>
    )
}