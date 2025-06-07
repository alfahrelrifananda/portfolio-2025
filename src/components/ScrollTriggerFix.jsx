import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useScrollTriggerRefresh() {
    const isInitialized = useRef(false)

    useEffect(() => {
        if (isInitialized.current) return

        const refreshTimer = setTimeout(() => {
            console.log("Refreshing ScrollTrigger")
            ScrollTrigger.refresh()
            isInitialized.current = true
        }, 100)

        const handleResize = () => {
            ScrollTrigger.refresh()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            clearTimeout(refreshTimer)
            window.removeEventListener("resize", handleResize)
        }
    }, [])
}
