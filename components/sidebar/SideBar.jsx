import { useEffect, useState } from 'react'
import styles from "@styles/components/SideBar.module.css"
import { getPages } from "@/utils/notion"
import SideBarItem from "@components/sidebar/SideBarItem"
import LinkButton from "@/components/LinkButton"

export default function SideBar() {
    const [data, setData] = useState([])
    const [backButtonUrl, setBackButtonUrl] = useState('')

    useEffect(() => {
        getPages().then(result => {
            setData(result)
        }).catch(error => {
            console.error(error)
        })

        if (typeof window !== 'undefined') {
            setBackButtonUrl(document.referrer)
        }
    }, [])

    return (
        <aside className={styles.aside}>
            <h3 className={styles.title}>Ingeniería Software</h3>
            <div className={styles.content}>
                {
                    data.map((item) => (
                        <SideBarItem item={item} key={item.id} />
                    ))
                }
            </div>
            <div className={styles.back_btn__container}>
                <LinkButton url={backButtonUrl} text="Volver" />
            </div>
        </aside>
    )
}