import styles from "@styles/components/SideBarItem.module.css"
import Image from "next/image"

export default function SideBarItem({ item }) {
    return (
        <a className={styles.item} href={item.url}>
            <Image
                className={`${styles.img} dark-icon`}
                src={`/assets/list-item-light.svg`}
                alt="List Item"
                width={20}
                height={20}
            />
            <Image
                className={`${styles.img} light-icon`}
                src={`/assets/list-item.svg`}
                alt="List Item"
                width={20}
                height={20}
            />
            <span className={styles.title}>{item.title}</span>
        </a>
    )
}