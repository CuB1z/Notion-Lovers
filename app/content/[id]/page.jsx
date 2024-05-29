"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Layout from "@/layouts/Layout"
import { getPages } from "@/utils/notion"

// This function gets called at build time on server-side.
export async function getStaticPaths() {
    const pages = await getPages()

    const paths = pages.map((page) => {
        return { params: { id: page.id } }
    })

    return { paths, fallback: false }
}

export default function Page() {
    const id = usePathname().split("/").pop()
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`/api?id=${id}`)
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [id])


    return (
        <Layout>
            <h1>Title + {id}</h1>
            <section className="content">
                {
                    data ? data.map((page) => {
                        return (
                            <div key={page.id}>
                                <h2>{page.title}</h2>
                                <p>{page.tag?.name}</p>
                            </div>
                        )
                    }) : "Loading..."
                }
            </section>
        </Layout>
    )
}