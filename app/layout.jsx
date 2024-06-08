import styles from "@styles/Layout.module.css"
import { metadata as metadataFromConstants } from "@/utils/constants"

export const metadata = metadataFromConstants

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<body className={styles.body}>{children}</body>
		</html>
	)
}