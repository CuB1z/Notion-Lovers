import styles from "@styles/components/SideBanner.module.css"
import BuyCoffe from "../BuyCoffe"

export default async function SideBanner() {

    return (
        <aside className={styles.aside}>
            <div className={styles.content}>
            </div>
            <div className={styles.coffee_container}>
                <BuyCoffe />
            </div>
        </aside>
    )
}