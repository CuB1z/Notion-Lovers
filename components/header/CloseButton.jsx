import styles from "@styles/components/CloseButton.module.css"

export default function CloseButton({ isOpen, onClick }) {
    return (
        <button className={`${styles.button} ${isOpen ? styles.clicked : ""}`} onClick={onClick}>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
            <span className={styles.span}></span>
        </button>
    )
}