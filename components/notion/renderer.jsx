"use client"
import { NotionRenderer } from 'react-notion-x'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'

// Import custom components
import Collection from './components/Collection'
import Code from './components/Code'
import Equation from './components/Equation'

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
          Equation: Equation,
        }}
      />
    </div>
  )
}
