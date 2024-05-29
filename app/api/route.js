import { NextResponse } from "next/server"
import { getPages } from "@/utils/notion"

// To handle a GET request to /api
export async function GET(request) {
    const pages = await getPages()
    return NextResponse.json(pages, { status: 200 })
}

// To handle a POST request to /api
export async function POST(request) {
    return NextResponse.json({ message: "What are you trying to do?" }, { status: 501 })
}