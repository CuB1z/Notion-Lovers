"use client"
import { SITE_TITLE } from "@/utils/constants"
import styles from "@styles/components/Header.module.css"
import HeaderLink from "@components/header/HeaderLink"
import CloseButton from "@components/header/CloseButton"
import { useState, useContext } from "react"
import { MobileContext } from "@/providers/MobileProvider"

export default function Header() {
    const isMobile = useContext(MobileContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1>
                    <a href="/">{SITE_TITLE} ❤</a>
                </h1>
                <CloseButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                <ul className={`${styles.ul} ${isOpen ? styles.open : ""} ${isMobile ? styles.mobile : ""}`}>
                    <HeaderLink href="/">Inicio</HeaderLink>
                    <HeaderLink href="/content">Contenido</HeaderLink>
                    <HeaderLink href="/about">Acerca de</HeaderLink>
                </ul>
                <ul className={`${styles.ul} ${isOpen ? styles.open : ""} ${styles.mobile}`}>
                    <HeaderLink href="/">Inicio</HeaderLink>
                    <HeaderLink href="/content">Contenido</HeaderLink>
                    <HeaderLink href="/about">Acerca de</HeaderLink>
                </ul>
            </nav>
        </header>
    )
}