import styles from "@styles/components/LinkButton.module.css"

export default function LinkButton({ children, url, target, color }) {
    return (
        <a className={`${styles.a} ${styles[color]}`} href={url} target={target} rel="noopener noreferrer">
            {children}
        </a>
    )
}