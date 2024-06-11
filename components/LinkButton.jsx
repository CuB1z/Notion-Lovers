import styles from "@styles/components/LinkButton.module.css"

export default function LinkButton({ children, url, target, color }) {
    return (
        <a
            style={{ backgroundColor: color }}
            className={styles.a}
            href={url}
            target={target}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}