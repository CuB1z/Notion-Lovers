import styles from "@styles/components/SideBarItem.module.css"

export default function SideBarItem({ item }) {
    return (
        <a className={styles.item} href={item.url}>
            <img className={`${styles.img} dark-icon`} src="/assets/list-item-light.svg" alt="List Item" />
            <img className={`${styles.img} light-icon`} src="/assets/list-item.svg" alt="List Item" />
            <span className={styles.title}>{item.title}</span>
        </a>
    )
}