"use client"
import { NotionRenderer } from 'react-notion-x'
import Collection from './components/Collection'
import Code from './components/Code'
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
        fullPage={false}
        darkMode={false}
        rootPageId={rootPageId}
        previewImages
        components={{
          Collection: Collection,
          Code: Code,
        }}
      />
    </div>
  )
}
