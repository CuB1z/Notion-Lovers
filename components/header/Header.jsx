"use client"
import { SITE_TITLE } from "@/utils/constants"
import styles from "@styles/components/Header.module.css"
import { useState, useContext } from "react"
import { MobileContext } from "@/providers/MobileProvider"
import { AVAILABLE_PAGES } from "@/utils/constants"
import HeaderLink from "@components/header/HeaderLink"
import CloseButton from "@components/header/CloseButton"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    // Header Links to be displayed
    const headerLinks = <>
        <HeaderLink href={AVAILABLE_PAGES.root.url}>Inicio</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.notes.url}>Apuntes</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.contribute.url}>Contribuir</HeaderLink>
        <HeaderLink href={AVAILABLE_PAGES.about.url}>Acerca de</HeaderLink>
    </>

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>
                    <a href={AVAILABLE_PAGES.root.url} className={styles.a}>
                        <span>{SITE_TITLE}</span>
                        <img className={styles.header_icon} src="/assets/black-heart.svg" alt="Dark Heart" />
                    </a>
                </h1>
                <CloseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                <ul className={`${styles.ul} ${isOpen ? styles.open : ""}`}>
                    {headerLinks}
                </ul>
                <ul className={`${styles.ul} ${isOpen ? styles.open : ""} ${styles.mobile}`}>
                    {headerLinks}
                </ul>
            </nav>
        </header>
    )
}