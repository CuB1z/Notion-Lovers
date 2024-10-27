// Debug Mode
export const DEBUG_MODE = process.env.NODE_ENV === "development"

export const SITE_TITLE = "Notion Lovers"
export const AUTHOR = "CuB1z"
export const SITE_DESCRIPTION = "Bienvendio a Notion Lovers, un lugar para compartir apuntes y conocimientos universitarios. ¡Únete a la comunidad!"
export const KEYWORDS = "Notion, Notion Lovers, Universidad, Apuntes, Conocimientos, Estudiantes, Comunidad, Ingeniería Software, URJC, Universidad Rey Juan Carlos, Madrid, España"
export const FAVICON = "/assets/heart.svg"
export const IMAGE = "/assets/preview.jpeg"
export const URL = "https://notionlovers.vercel.app"

export const AVAILABLE_PAGES = {
    root: {
        name: "Root",
        url: "/"
    },
    tree: {
        name: "Tree",
        url: "/tree"
    },
    about: {
        name: "About",
        url: "/about"
    },
    notes: {
        name: "Notes",
        url: "/notes"
    },
    contribute: {
        name: "Contribute",
        url: "/contribute"
    }
}

export const GITHUB_REPO = "https://github.com/CuB1z/Notion-Lovers"

export const METADATA = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keyWords: KEYWORDS,
    author: AUTHOR,
    favicon: FAVICON,
    image: IMAGE,
    url: URL
}

export const CACHE_LIFE_TIME = 1000 * 60 * 2
export const MOBILE_BREAKPOINT = 850