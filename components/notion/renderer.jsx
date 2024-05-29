"use client"
import { NotionRenderer } from "react-notion-x"

import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

export const NotionPage = ({ recordMap, rootPageId }) => {
  if (!recordMap) {
    return null
  }

  return (
    <div className="notion_container">
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
      />
    </div>
  )
}
