"use client"
import styles from "@styles/components/header/HeaderLink.module.css"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { MobileContext } from "@/providers/MobileProvider"
import { AVAILABLE_PAGES } from "@/utils/constants"

export default function HeaderLink({ href, children }) {
    const isMobile = useContext(MobileContext)

    // Retrieve the current path and the first part of the href
    const path = usePathname().split("/")[1]
    const fHref = href.split("/")[1]

    // If the current path equals to the first part of the href, set the active style
    let activeStyle = path === fHref ? styles.active : ""

    // Exceptions for the tree page
    if (path === AVAILABLE_PAGES.tree.url.split("/")[1] && fHref === AVAILABLE_PAGES.notes.url.split("/")[1]) {
        activeStyle = styles.active
    }

    return (
        <li className={`${styles.link} ${activeStyle} ${isMobile ? styles.mobile : ""}`}>
            <a className={styles.a} href={href}>
                {children}
            </a>
        </li>
    )
}