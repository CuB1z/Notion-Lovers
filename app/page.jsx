"use client"
import { useState, useEffect } from 'react'
import Layout from "@/layouts/Layout"
import Home from "@/components/Home"
import HomeCard from "@/components/HomeCard"
import LinkButton from "@/components/LinkButton"
import LoadingScene from '@/components/LoadingScene'

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request to fetch data, which takes 2 seconds
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <LoadingScene />
    }

    return (
        <Layout>
            <Home />
            <main>
                <HomeCard
                    title={"Ingeniería Software"}
                    description={"Ofrecemos una variedad de apuntes que hemos ido recopilando durante nuestra experiencia universitaria."}
                    image={"/assets/library-urjc.jpeg"}
                    imageSide={"right"}
                >
                    <LinkButton
                        url={"/content"}
                        text={"Ver apuntes"}
                    />
                </HomeCard>
                <HomeCard
                    title={"Repositorio de GitHub"}
                    description={"Mantenemos nuestro código fuente abierto a todos los usuarios. De esta forma, ofrecemos transparencia y la posibilidad de colaborar en el proyecto."}
                    image={"/assets/github-bg.jpeg"}
                    imageSide={"left"}
                >
                    <LinkButton
                        url={"https://github.com/CuB1z/notion-page"}
                        text={"Ver repositorio"}
                        target={"_blank"}
                    />
                </HomeCard>
            </main>
        </Layout>
    );
}