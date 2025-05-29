import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "../../style/MyBlog.module.css"
import CardBlog from "./CardBlog";


gsap.registerPlugin(ScrollTrigger)

function MyBlog() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        const cards = cardsRef.current

        if (!container || !cards) return

        const initScrollTrigger = () => {
            const cardWidth = 500
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
        <div className={styles.pageContainer}>
            <section className={styles.sectionOne}>
            </section>

            <section ref={containerRef} className={styles.sectionTwo}>

                <div ref={cardsRef} className={styles.cardsContainer}>
                    <div className={styles.card}>
                        <CardBlog />
                    </div>
                    <div className={styles.card}>
                        <CardBlog />

                    </div>
                    <div className={styles.card}>
                        <CardBlog />

                    </div>
                    <div className={styles.card}>
                        <CardBlog />

                    </div>
                    <div className={styles.card}>
                        <CardBlog />

                    </div>

                </div>
            </section>

            <section className={styles.sectionThree}>
            </section>
        </div>
    )
}


export default MyBlog