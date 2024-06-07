import styles from "@styles/components/SideBarItem.module.css"

export default function SideBarItem({ item }) {
    return (
        <a className={styles.item} href={item.url}>
            <img className={styles.img} src="/assets/list-item.svg" alt="arrow" />
            <span className={styles.title}>{item.title}</span>
        </a>
    )
}