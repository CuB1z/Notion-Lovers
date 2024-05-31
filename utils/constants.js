// Debug Mode
export const DEBUG_MODE = process.env.NODE_ENV === "development"

export const SITE_TITLE = "Notion Lovers"
export const SITE_DESCRIPTION = "Welcome to Notion Lovers!"
export const FAVICON_URL = "/assets/heart.svg"

export const metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
}

export const CACHE_LIFE_TIME = DEBUG_MODE ? 1000 * 0 : 1000 * 60 * 60 // {ms * s * m} 1 hour
console.log("DEBUG_MODE", DEBUG_MODE)