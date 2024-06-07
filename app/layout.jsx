import styles from "@styles/Layout.module.css"
import { metadata as metadataFromConstants } from "@/utils/constants"

export const metadata = metadataFromConstants

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2182924213276098"
					crossOrigin="anonymous"></script>
			</head>
			<body className={styles.body}>{children}</body>
		</html>
	)
}