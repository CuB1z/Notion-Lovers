"use client"
import styles from "@styles/components/HeaderLink.module.css"
import { usePathname } from "next/navigation"

export default function HeaderLink({ href, children }) {
    const router = usePathname()
    const activeStyle = href === router ? styles.active : ""
    
    return (
        <a className={`${styles.a} ${activeStyle}`} href={href}>
            {children}
        </a>
    )
}