import React, { useState, useEffect } from 'react'
import { MOBILE_BREAKPOINT } from '@/utils/constants'

// Create the context
export const MobileContext = React.createContext()

// Create the provider component
export const MobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <MobileContext.Provider value={isMobile}>
            {children}
        </MobileContext.Provider>
    )
}