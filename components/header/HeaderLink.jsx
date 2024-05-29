import styles from "@styles/components/HeaderLink.module.css"

export default function HeaderLink({ href, children }) {
    return (
        <a className={styles.a} href={href}>
            {children}
        </a>
    )
}