import styles from "@styles/components/SideBar.module.css"
import SideBarItem from "@components/sidebar/SideBarItem"
import LinkButton from "@/components/LinkButton"

export default function SideBar({ backUrl, pages }) {
    return (
        <aside className={styles.aside}>
            <h3 className={styles.title}>Ingeniería Software</h3>
            <div className={styles.content}>
                {
                    pages.map((item) => (
                        <SideBarItem item={item} key={item.id} />
                    ))
                }
            </div>
            <div className={styles.back_btn__container}>
                <LinkButton url={backUrl}>Volver</LinkButton>
            </div>
        </aside>
    )
}