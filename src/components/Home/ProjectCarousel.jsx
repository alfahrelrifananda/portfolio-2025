import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Style from "../../style/ProjectCarousel.module.css"


gsap.registerPlugin(ScrollTrigger)

function ProjectCarousel() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const cards = cardsRef.current

        if (!container || !cards) return

        const initScrollTrigger = () => {
            const cardWidth = 600
            const totalWidth = cardWidth * 5

            const horizontalScroll = gsap.to(cards, {
                x: -totalWidth + window.innerWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            })

            return horizontalScroll
        }

        const timer = setTimeout(() => {
            const animation = initScrollTrigger()

            setTimeout(() => {
                ScrollTrigger.refresh()
            }, 100)

            return () => {
                if (animation) animation.kill()
            }
        }, 100)

        const handleLoad = () => {
            ScrollTrigger.refresh()
        }

        const handleResize = () => {
            ScrollTrigger.refresh()
        }

        window.addEventListener("load", handleLoad)
        window.addEventListener("resize", handleResize)

        return () => {
            clearTimeout(timer)
            window.removeEventListener("load", handleLoad)
            window.removeEventListener("resize", handleResize)
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className={Style.pageContainer}>
            <section className={Style.sectionOne}>
            </section>

            <section ref={containerRef} className={Style.sectionTwo}>

                <div ref={cardsRef} className={Style.cardsContainer}>
                    <div className={Style.card}>
                    </div>
                    <div className={Style.card}>
                    </div>
                    <div className={Style.card}>
                    </div>
                    <div className={Style.card}>
                    </div>
                    <div className={Style.card}>
                    </div>
                </div>
            </section>

            <section className={Style.sectionThree}>
            </section>
        </div>
    )
}


export default ProjectCarousel