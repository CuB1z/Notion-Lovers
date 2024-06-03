"use client"
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

// Import custom components
import Collection from "@components/notion/components/Collection"
import Code from "@components/notion/components/Code"
import Equation from "@components/notion/components/Equation"
import Link from "@components/notion/components/Link"

export const NotionPage = ({ recordMap, rootPageId }) => {
  if (!recordMap) {
    return null
  }

  return (
    <div className="notion_container">
      <NotionRenderer
        recordMap={recordMap}
        mapPageUrl={(pageId) => `/tree/${pageId}`}
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
        components={{
          Collection: Collection,
          Code: Code,
          Equation: Equation,
          PageLink: Link,
        }}
      />
    </div>
  )
}
