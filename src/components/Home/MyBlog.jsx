import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Style from "../../style/HomeModule/MyBlog.module.css"
import CardBlog from "./CardBlog"
import ScrollVelocity from "../ReactBits/ScrollVelocity"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import blog1 from "../../assets/blog_featured/img_placeholder_and.png"


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
                    texts={['MY BLOG -']}
                    className="custom-scroll-text"
                />
                <div ref={cardsRef} className={Style.cardsContainer}>
                    <div className={Style.card}>
                        <CardBlog
                            day="Friday"
                            date="6 June, 2025"
                            FeatImg={blog1}
                            hour="02.20 PM"
                            minutenRead="12 min"
                            category="Tech"
                            title="Masa Depan Open Source dan GNU"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />
                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Friday"
                            date="6 June, 2025"
                            FeatImg={blog1}
                            hour="02.20 PM"
                            minutenRead="12 min"
                            category="Tech"
                            title="Masa Depan Open Source dan GNU"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Friday"
                            date="6 June, 2025"
                            FeatImg={blog1}
                            hour="02.20 PM"
                            minutenRead="12 min"
                            category="Tech"
                            title="Masa Depan Open Source dan GNU"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Friday"
                            date="6 June, 2025"
                            FeatImg={blog1}
                            hour="02.20 PM"
                            minutenRead="12 min"
                            category="Tech"
                            title="Masa Depan Open Source dan GNU"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Friday"
                            date="6 June, 2025"
                            FeatImg={blog1}
                            hour="02.20 PM"
                            minutenRead="12 min"
                            category="Tech"
                            title="Masa Depan Open Source dan GNU"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />

                    </div>
                    <div className={Style.card}>
                        <Link to="/blog">
                            <div className={Style.moreBlog}>
                                <span>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </span>
                                <p>Show more</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>

            <section className={Style.sectionThree}>
            </section>
        </div>
    )
}


export default MyBlog