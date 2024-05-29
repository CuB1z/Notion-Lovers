import { NextResponse } from "next/server"
import { getPages, getChildDatabasePages } from "@/utils/notion"

// To handle a GET request to /api
export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id")
    const pages = id ? await getChildDatabasePages(id) : await getPages()

    return NextResponse.json(pages, { status: 200 })
}

// To handle a POST request to /api
export async function POST(request) {
    return NextResponse.json({ message: "What are you trying to do?" }, { status: 501 })
}