import React, { useState, useEffect } from 'react'

// Create the context
export const MobileContext = React.createContext()

// Create the provider component
export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    )
}