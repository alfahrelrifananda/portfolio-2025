import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Style from "../../style/MyBlog.module.css"
import CardBlog from "./CardBlog";
import ScrollVelocity from "../ReactBits/ScrollVelocity";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'


gsap.registerPlugin(ScrollTrigger)

function MyBlog() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {


        const container = containerRef.current
        const cards = cardsRef.current

        if (!container || !cards) return

        const initScrollTrigger = () => {
            let cardWidth = 450

            if (window.innerWidth < 1000) {
                cardWidth = 350
            }

            const totalWidth = cardWidth * 6


            const horizontalScroll = gsap.to(cards, {
                x: -totalWidth + window.innerWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top 50",
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
                <ScrollVelocity
                    texts={['RECENT BLOG -']}
                    className="custom-scroll-text"
                />
                <div ref={cardsRef} className={Style.cardsContainer}>
                    <div className={Style.card}>
                        <CardBlog />
                    </div>
                    <div className={Style.card}>
                        <CardBlog />

                    </div>
                    <div className={Style.card}>
                        <CardBlog />

                    </div>
                    <div className={Style.card}>
                        <CardBlog />

                    </div>
                    <div className={Style.card}>
                        <CardBlog />

                    </div>
                    <div className={Style.card}>
                        <div className={Style.moreBlog}>
                            <span>
                                <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                            </span>
                            <p>Show more</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className={Style.sectionThree}>
            </section>
        </div>
    )
}


export default MyBlog