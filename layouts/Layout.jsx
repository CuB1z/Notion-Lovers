import "@styles/globals.css"
import styles from "@styles/Layout.module.css"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"

export default function Layout({ preMain, children }) {
	return (
		<>
			<Header />
			<section className={styles.section}>
				{preMain}
			</section>
			<main className={styles.main}>
				{children}
			</main>
			<Footer />
		</>
	)
}
