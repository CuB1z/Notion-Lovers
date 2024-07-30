import styles from "@styles/components/LinkButton.module.css"

export default function LinkButton({ children, url, target, color, secondary }) {
    return (
        <a
            style={{ backgroundColor: color }}
            className={`${styles.a} ${secondary ? styles.secondary : ""}`}
            href={url}
            target={target}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}