import styles from "@styles/components/Footer.module.css"
import { SITE_TITLE } from "@/utils/constants"

export default function Footer() {
    const today = new Date()
    return (
        <footer className={styles.footer}>
            <span>&copy; {today.getFullYear()} {SITE_TITLE}.</span>
            <span className={styles.cool_text}>Made for and by the community</span>
        </footer>
    )
}