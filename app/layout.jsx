import styles from "@styles/Layout.module.css"
import { metadata as metadataFromConstants } from "@/utils/constants"
import { SchemeProvider } from "@providers/SchemeProvider"

export const metadata = metadataFromConstants

export default function RootLayout({ children }) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={styles.body}>
				<SchemeProvider>
					{children}
				</SchemeProvider>
			</body>
		</html>
	)
}