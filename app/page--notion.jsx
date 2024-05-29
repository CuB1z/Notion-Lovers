import { notion } from "@/utils/notion"
import { NotionPage } from "@/components/notion/renderer"

const rootId = "9aba5d4ce9f44720a3c11b6d07c6e0a9"

async function getData(rootId) {
  return await notion.getPage(rootId)
}

export default async function Home() {
  const data = await getData(rootId)

  return (
    <NotionPage recordMap={data} rootPageId={rootId} />
  )
}
