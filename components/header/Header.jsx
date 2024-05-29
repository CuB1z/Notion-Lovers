import { SITE_TITLE } from "@/utils/constants"
import styles from "@styles/components/Header.module.css"
import HeaderLink from "./HeaderLink"

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>
                    <a href="/">{SITE_TITLE} ❤</a>
                </h1>
                <ul className={styles.ul}>
                    <HeaderLink href="/">Inicio</HeaderLink>
                    <HeaderLink href="/content">Contenido</HeaderLink>
                    <HeaderLink href="/about">Acerca de</HeaderLink>
                </ul>
            </nav>
        </header>
    )
}