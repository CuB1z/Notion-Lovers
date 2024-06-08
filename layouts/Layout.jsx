"use client"
import "@styles/globals.css"
import styles from "@styles/Layout.module.css"
import Header from "@/components/header/Header"
import Footer from "@/components/Footer"
import { MobileProvider } from "@/providers/MobileProvider"

export default function Layout({ preMain, children }) {
	return (
		<MobileProvider>
			<Header />
			<section className={styles.section}>
				{preMain}
			</section>
			<main className={styles.main}>
				{children}
				<Footer />
			</main>
		</MobileProvider>
	)
}
