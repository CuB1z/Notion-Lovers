import styles from "@styles/components/LinkButton.module.css"

export default function LinkButton({ text, url, target }) {
    return (
        <a className={styles.a} href={url} target={target}>
            {text}
        </a>
    )
}