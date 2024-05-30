import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

// Your languageComponents object
const languageComponents = {
    java: () => import("prismjs/components/prism-java"),
    javascript: () => import("prismjs/components/prism-javascript"),
    python: () => import("prismjs/components/prism-python"),
    css: () => import("prismjs/components/prism-css"),
    html: () => import("prismjs/components/prism-markup"),
    markdown: () => import("prismjs/components/prism-markdown"),
    sql: () => import("prismjs/components/prism-sql"),
    shell: () => import("prismjs/components/prism-bash"),
    bash: () => import("prismjs/components/prism-bash"),
    json: () => import("prismjs/components/prism-json"),
    c: () => import("prismjs/components/prism-c"),
    pascal: () => import("prismjs/components/prism-pascal"),
}

export default function Code({ block }) {
    // Extract the code and language from the block properties
    const code = block.properties?.title?.[0]?.[0]
    const language = block.properties?.language?.[0]?.[0].toLowerCase().replace(/ /g, '-')

    useEffect(() => {
        // Import the necessary language component
        const importLanguage = async () => {
            if (languageComponents[language]) {
                await languageComponents[language]()
            }
            Prism.highlightAll()
        }
        importLanguage()
    }, [code, language])

    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    )
}