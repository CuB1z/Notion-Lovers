import styles from "@styles/components/svg/Arrow.module.css"

export default function Arrow({ size = 24 }) {
    return (
        <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={"0 0 24 24"}>
            <path className={styles.path} d="m12 6.414 7.293 7.293 1.414-1.414L12 3.586l-8.707 8.707 1.414 1.414L12 6.414z" />
            <path className={styles.path} d="m3.293 18.293 1.414 1.414L12 12.414l7.293 7.293 1.414-1.414L12 9.586l-8.707 8.707z" />
        </svg>
    )
}