import styles from "@styles/components/BuyCoffe.module.css"

export default function BuyCoffe() {
    return (
        <a className={styles.buy_coffe}>
            <img className={styles.img} src="/assets/coffee.png" alt="Buy me a coffe" />
        </a>
    )
}
