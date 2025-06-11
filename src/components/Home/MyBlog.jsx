import { useLayoutEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Style from "../../style/HomeModule/MyBlog.module.css"
import CardBlog from "./CardBlog"
import blog1 from "../../assets/blog_featured/img_placeholder_and.png"
import blog2 from "../../assets/blog_featured/image_placeholder_blog2.jpg"
import blog3 from "../../assets/blog_featured/image_placeholder_blog3.jpg"
import blog4 from "../../assets/blog_featured/image_placeholder_blog4.jpg"
import blog5 from "../../assets/blog_featured/image_pplaceholder_blog5.jpg"
import Link from "../../Utils/CustomLinkR"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"

gsap.registerPlugin(ScrollTrigger)
function MyBlog() {
    const containerRef = useRef(null)
    const cardsRef = useRef(null)
    const buttonRef = useRef(null)


    const handleMouseEnter = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return
        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top
        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])
    const handleMouseLeave = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return
        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top
        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])
    useLayoutEffect(() => {
        const container = containerRef.current
        const cards = cardsRef.current

        if (!container || !cards) return
        const initScrollTrigger = () => {
            let cardWidth = 450
            if (window.innerWidth < 1000) {
                cardWidth = 400
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
            ScrollTrigger.normalizeScroll(true);
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
                            day="Saturday"
                            date="7 June, 2025"
                            FeatImg={blog2}
                            hour="05.44 AM"
                            minutenRead="7 min"
                            category="Social"
                            title="Tingkat Pengangguran di Indonesia Yang Terus Meningkat"
                            desc="Open source, dengan kode programnya yang terbuka dan bebas diakses, dimodifikasi, serta disebarkan, adalah fondasi penting di dunia teknologi. Begitu pula GNU, proyek ambisius Richard Stallman untuk menciptakan sistem operasi yang benar-benar bebas, yang telah melahirkan banyak alat krusial termasuk dasar bagi Linux. Konsep ini menjanjikan kolaborasi global, transparansi, dan inovasi tanpa batas, memungkinkan ribuan orang bekerja sama untuk mengembangkan dan memperbaiki perangkat lunak. Ide dasarnya sangat mulia: perangkat lunak harusnya menjadi kebebasan, bukan batasan." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Saturday"
                            date="7 June, 2025"
                            FeatImg={blog3}
                            hour="05.43 AM"
                            minutenRead="8 min"
                            category="Tech"
                            title="Mengapa JavaScript Lebih Unggul dari PHP di Era Modern?"
                            desc="Di dunia pengembangan web, perdebatan antara JavaScript (JS) dan PHP sudah berlangsung lama. Keduanya memiliki kekuatan dan kelemahan masing-masing, serta basis penggemar yang loyal. Namun, seiring dengan perkembangan teknologi web yang sangat pesat, terutama memasuki pertengahan tahun 2025 ini, ada beberapa argumen kuat mengapa JavaScript kini sering dianggap lebih unggul dari PHP, khususnya untuk proyek-proyek web modern." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Saturday"
                            date="7 June, 2025"
                            FeatImg={blog4}
                            hour="05.49 AM"
                            minutenRead="10 min"
                            category="Tech"
                            title="PHP Yang Semakin Tersingkir di 2025"
                            desc="Dulu, PHP adalah pilihan tak terbantahkan untuk pengembangan web sisi server. Ia menggerakkan mayoritas internet, dari blog sederhana hingga platform besar. Namun, di tahun 2025 ini, lanskap pengembangan web telah bergeser drastis. Meskipun PHP masih ada dan digunakan oleh banyak situs warisan (legacy), ada argumen kuat mengapa ia mulai tersingkir dari posisi dominannya, terutama untuk proyek-proyek web modern dan inovatif." />

                    </div>
                    <div className={Style.card}>
                        <CardBlog
                            day="Saturday"
                            date="7 June, 2025"
                            FeatImg={blog5}
                            hour="05.47 AM"
                            minutenRead="15 min"
                            category="Tech"
                            title="Mengapa React.js Unggul Dibanding Laravel?"
                            desc="Perdebatan tentang mana yang 'lebih unggul' seringkali muncul. Antara React.js dan Laravel, perbandingan ini menjadi menarik karena keduanya sebenarnya melayani tujuan yang berbeda namun sering digunakan bersama. Laravel adalah framework PHP sisi server untuk membangun aplikasi web lengkap, sementara React.js adalah pustaka JavaScript untuk membangun antarmuka pengguna (UI) sisi klien. Namun, ada beberapa skenario dan tren modern yang membuat React.js memiliki keunggulan tertentu." />

                    </div>
                    <div className={Style.card} >
                        <Link to="blog" replace reloadDocument>
                            <div className={Style.moreBlog}>
                                <span>
                                    <button
                                        type="submit"
                                        ref={buttonRef}
                                        className={Style.btnPosnawr}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <span className={Style.hoverEffect}></span>
                                        <span className={Style.buttonText}>
                                            <FontAwesomeIcon icon={faArrowUp} />
                                        </span>
                                    </button>
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