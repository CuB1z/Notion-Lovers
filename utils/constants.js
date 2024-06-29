// Debug Mode
export const DEBUG_MODE = process.env.NODE_ENV === "development"

export const SITE_TITLE = "Notion Lovers"
export const SITE_DESCRIPTION = "Bienvendio a Notion Lovers, un lugar para compartir apuntes y conocimientos universitarios."
export const FAVICON_URL = "/assets/heart.svg"

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

export const metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    image: FAVICON_URL,
}

export const CACHE_LIFE_TIME = 1000 * 60 * 2
export const MOBILE_BREAKPOINT = 850