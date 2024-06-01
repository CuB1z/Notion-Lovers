import "@styles/globals.css"
import styles from "@styles/ContentLayout.module.css"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/sidebar/SideBar"
import SideBanner from "@/components/sidebar/SideBanner"


export default function ContentLayout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <aside className={styles.aside}>
                    <SideBar />
                </aside>
                <div className={styles.main}>
                    {children}
                </div>
                <aside className={styles.aside}>
                    <SideBanner />
                </aside>
            </div>
            <Footer />
        </>
    )
}
