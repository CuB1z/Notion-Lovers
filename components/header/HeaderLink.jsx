"use client"
import styles from "@styles/components/HeaderLink.module.css"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { MobileContext } from "@/providers/MobileProvider"

export default function HeaderLink({ href, children }) {
    const isMobile = useContext(MobileContext)

    const path = usePathname().split("/")[1]
    const fHref = href.split("/")[1]
    const activeStyle = path === fHref ? styles.active : ""
    
    return (
        <a className={`${styles.a} ${activeStyle} ${isMobile ? styles.mobile : ""}`} href={href}>
            {children}
        </a>
    )
}