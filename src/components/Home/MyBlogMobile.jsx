import Style from "../../style/HomeModule/MyBlogMobile.module.css"
import CardBlog from "./CardBlog"
import blog1 from "../../assets/blog_featured/img_placeholder_and.png"
import blog2 from "../../assets/blog_featured/image_placeholder_blog2.jpg"
import blog3 from "../../assets/blog_featured/image_placeholder_blog3.jpg"
import ScrollVelocity from "../ReactBits/ScrollVelocity"

import { useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"

function MyBlogMobile() {

    const navigate = useNavigate()

    function goToBlogPage() {
        navigate("/blog")
    }

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
    return (
        <div className={Style.superContainer}>
            <ScrollVelocity
                texts={['MY BLOG -']}
                className="custom-scroll-text"
            />
            <div className={Style.container}>
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

            </div>
            <div className={Style.btncontainer}>
                <button
                    type="submit" onClick={() => goToBlogPage()}
                    ref={buttonRef}
                    className={Style.btnPosnawr}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={Style.hoverEffect}></span>
                    <span className={Style.buttonText}>Show More</span>
                </button>
            </div>
        </div>
    )
}

export default MyBlogMobile