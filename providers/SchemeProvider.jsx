"use client"
import { ThemeProvider } from "next-themes"

export const SchemeProvider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    )
}