"use client"
import "@styles/globals.css"
import styles from "@styles/ContentLayout.module.css"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"
import SideBar from "@/components/sidebar/SideBar"
import SideBanner from "@/components/sidebar/SideBanner"
import { MobileProvider } from "@/providers/MobileProvider"


export default function ContentLayout({ backUrl, pages, children, isTree }) {
    return (
        <MobileProvider>
            <Header />
            <div className={`${styles.content} ${isTree ? styles.tree : ""}`}>
                {!isTree && (
                    <aside className={styles.aside}>
                        <SideBar backUrl={backUrl} pages={pages} />
                    </aside>
                )}
                <div className={styles.main}>
                    <div className={styles.main_content}>
                        {children}
                        <Footer />
                    </div>
                </div>
                {!isTree && (
                    <aside className={`${styles.aside} ${styles.banner}`}>
                        <SideBanner />
                    </aside>
                )}
            </div>
        </MobileProvider>
    )
}
