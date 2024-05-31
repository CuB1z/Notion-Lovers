"use client"
import styles from "@styles/components/HeaderLink.module.css"
import { usePathname } from "next/navigation"

export default function HeaderLink({ href, children }) {
    const path = usePathname().split("/")[1]
    const fHref = href.split("/")[1]
    const activeStyle = path === fHref ? styles.active : ""
    
    return (
        <a className={`${styles.a} ${activeStyle}`} href={href}>
            {children}
        </a>
    )
}