import styles from "@styles/components/BuyCoffe.module.css"
import Image from "next/image"

export default function BuyCoffe() {
    return (
        <a className={styles.buy_coffe}>
            <Image
                className={styles.img}
                src="/assets/coffee.png"
                alt="Buy me a coffe"
                width={50}
                height={50}
            />
        </a>
    )
}
