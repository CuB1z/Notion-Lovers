import styles from "@styles/Layout.module.css"
import { METADATA as metadataFromConstants } from "@/utils/constants"
import { SchemeProvider } from "@providers/SchemeProvider"

const metadata = metadataFromConstants

export default function RootLayout({ children }) {
	return (
		<html lang="es" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#f32121" />
				<meta name="description" content={metadata.description} />
				<meta name="keywords" content={metadata.keyWords} />
				<meta name="author" content={metadata.author} />
				<meta name="robots" content="index, follow" />
				<meta name="googlebot" content="index, follow" />
				<meta name="google" content="notranslate" />
				<meta name="generator" content="Next.js" />
				<meta name="application-name" content={metadata.title} />
				<meta name="msapplication-TileColor" content="#f32121" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="og:image" content={metadata.image} />
				<meta name="og:title" content={metadata.title} />
				<meta name="og:description" content={metadata.description} />
				<meta name="og:type" content="website" />
				<meta name="og:url" content={metadata.url} />
				<meta name="og:site_name" content={metadata.title} />
				<meta name="og:locale" content="es_ES" />
				<meta name="twitter:card" content="app" />
				<meta name="twitter:image" content={metadata.image} />
				<meta name="twitter:title" content={metadata.title} />
				<meta name="twitter:description" content={metadata.description} />
				<meta rel="manifest" href="/manifest.json" />
				<title>{metadata.title}</title>
			</head>
			<body className={styles.body}>
				<SchemeProvider>
					{children}
				</SchemeProvider>
			</body>
		</html>
	)
}