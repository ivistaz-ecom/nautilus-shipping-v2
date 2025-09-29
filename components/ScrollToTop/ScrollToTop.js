"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

const ScrollToTop = () => {
    const pathname = usePathname()
    const timeoutRef = useRef(null)

    const scrollToTopSmoothly = () => {
        // Clear any existing timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // Smooth scroll to top
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })

            // Also try with a small delay to ensure it overrides other scroll behaviors
            timeoutRef.current = setTimeout(() => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                })
            }, 50)
        }
    }

    useEffect(() => {
        // Scroll to top on component mount (page load/refresh)
        scrollToTopSmoothly()
    }, [])

    useEffect(() => {
        // Scroll to top when pathname changes (navigation including back/forward)
        scrollToTopSmoothly()
    }, [pathname])

    useEffect(() => {
        // Handle browser back/forward navigation
        const handlePopState = () => {
            scrollToTopSmoothly()
        }

        // Handle page show event (triggered when navigating back from cache)
        const handlePageShow = (event) => {
            scrollToTopSmoothly()
        }

        // Handle load event (when everything is loaded)
        const handleLoad = () => {
            scrollToTopSmoothly()
        }

        // Handle hashchange (when URL hash changes)
        const handleHashChange = () => {
            scrollToTopSmoothly()
        }

        // Add event listeners
        window.addEventListener("popstate", handlePopState)
        window.addEventListener("pageshow", handlePageShow)
        window.addEventListener("load", handleLoad)
        window.addEventListener("hashchange", handleHashChange)

        // Cleanup event listeners
        return () => {
            window.removeEventListener("popstate", handlePopState)
            window.removeEventListener("pageshow", handlePageShow)
            window.removeEventListener("load", handleLoad)
            window.removeEventListener("hashchange", handleHashChange)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    // Additional effect to handle router events in Next.js
    useEffect(() => {
        // Smooth scroll to top on any route change with a slight delay
        const timer = setTimeout(() => {
            scrollToTopSmoothly()
        }, 100)

        return () => clearTimeout(timer)
    }, [pathname])

    return null // This component doesn't render anything
}

export default ScrollToTop
