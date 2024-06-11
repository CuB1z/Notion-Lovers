"use client"
import styles from "@styles/components/header/Header.module.css"
import { useState } from "react"
import { SITE_TITLE, AVAILABLE_PAGES } from "@/utils/constants"
import HeaderLink from "@components/header/HeaderLink"
import CloseButton from "@components/header/CloseButton"
import SchemeSwitcher from "@components/header/SchemeSwitcher"
import HeartIcon from "@/components/svg/HeartIcon"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    // Header Links to be displayed
    const headerLinks = <>
        <HeaderLink href={AVAILABLE_PAGES.root.url}>Inicio</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.notes.url}>Apuntes</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.contribute.url}>Contribuir</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.about.url}>Acerca de</HeaderLink>
        <SchemeSwitcher />
    </>

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>
                    <a href={AVAILABLE_PAGES.root.url} className={styles.a}>
                        <span>{SITE_TITLE}</span>
                        <HeartIcon size={20} />
                    </a>
                </h1>
                <CloseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                <ul className={styles.ul}>
                    {headerLinks}
                </ul>
                <ul className={`${styles.ul} ${isOpen ? styles.open : ""} ${styles.mobile}`}>
                    {headerLinks}
                </ul>
            </nav>
        </header>
    )
}