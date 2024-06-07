// Debug Mode
export const DEBUG_MODE = process.env.NODE_ENV === "development"

export const SITE_TITLE = "Notion Lovers"
export const SITE_DESCRIPTION = "Welcome to Notion Lovers!"
export const FAVICON_URL = "/assets/heart.svg"

export const GITHUB_REPO = "https://github.com/CuB1z/Notion-Lovers"

export const metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
}

export const CACHE_LIFE_TIME = 1000 * 60 * 2
export const MOBILE_BREAKPOINT = 768