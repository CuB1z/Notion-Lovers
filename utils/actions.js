"use server"
import { insertContributorData } from "@utils/notion"

export async function contribute(formData) {
    // Read the form data
    const name = formData.get("name")
    const title = formData.get("title")
    const link = formData.get("link")
    
    // Read the file content
    const file = formData.get("file")
    const fileBuffer = Buffer.from(await file.arrayBuffer())
    const fileContent = fileBuffer.toString("utf8")

    // TODO: Validate the form data

    // Format data object
    const data = {
        title: title || "Untitled",
        url: link || "unknown",
        content: fileContent || "",
        name: name || "",
    }

    // Insert the data into Notion database
    try {
        await insertContributorData(data)
        return { success: true }
    } catch (error) {
        console.error(`Failed to insert contributor data: ${error}`)
        return { success: false }
    }
}