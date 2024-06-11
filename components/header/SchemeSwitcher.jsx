import styles from "@styles/components/header/SchemeSwitcher.module.css"
import { useTheme } from "next-themes"

export default function SchemeSwitcher() {
    const { theme, setTheme } = useTheme()

    const handleSchemeChange = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("scheme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("scheme", "light")
        }
    }

    return (
        <div className={styles.scheme_switcher}>
            <button
                className={`${styles.scheme_switcher_button}`}
                onClick={handleSchemeChange}
            >
                <div className={styles.icon} id="light_icon">
                    <img className={styles.img} src="/assets/sun.svg" alt="Sun" />
                </div>
                <div className={styles.icon} id="dark_icon">
                    <img className={styles.img} src="/assets/moon.svg" alt="Moon" />
                </div>
            </button>
        </div>
    )
}