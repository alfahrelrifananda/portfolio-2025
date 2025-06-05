import { useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "../../style/HomeModule/AboutMore.module.css"
import MyCV from "../../assets/MyCV.pdf"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

function AboutMore() {
    const section2Ref = useRef(null)
    const textRef = useRef(null)
    const buttonRef = useRef(null)

    const handleMouseEnter = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return

        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top

        const span = button.querySelector(`.${styles.hoverEffect}`)
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

        const span = button.querySelector(`.${styles.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])

    useEffect(() => {
        const section2 = section2Ref.current
        const textContainer = textRef.current
        const button = buttonRef.current


        if (!section2 || !textContainer || !button) return

        const words = textContainer.querySelectorAll(".word")

        gsap.set(words, { opacity: 0.2 })
        gsap.set(button, { opacity: 0 })

        const moreAbout = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section2,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress
                        const totalWords = words.length
                        const wordsToReveal = Math.floor(progress * totalWords)

                        words.forEach((word, index) => {
                            if (index <= wordsToReveal) {
                                gsap.to(word, { opacity: 1, duration: 0.3 })
                            } else {
                                gsap.to(word, { opacity: 0.2, duration: 0.3 })
                            }
                        })

                        if (progress > 0.9) {
                            gsap.to(button, { opacity: 1, duration: 0.5 })
                        } else {
                            gsap.to(button, { opacity: 0, duration: 0.3 })
                        }
                    },
                },
            })

            return tl
        }



        const timer = setTimeout(() => {
            const animation = moreAbout()

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

    const textContent =
        "From Solo, Indonesia. As a creative developer, I'm driven by a love for crafting digital magic. My passion for innovative solutions goes hand-in-hand with my dedication as a GNU/Linux user and free software advocate, as I believe in open principles to transform ideas into captivating online experiences."

    const words = textContent.split(" ")

    return (
        <div className={styles.scrollContainer}>

            <section ref={section2Ref} className={styles.section2}>
                <div className={styles.pinnedContent}>
                    <div ref={textRef} className={styles.textContainer}>
                        {words.map((word, index) => (
                            <span key={index} className="word">
                                {word}{"  "}
                            </span>
                        ))}
                    </div>
                    <a href={MyCV} download>
                        <button
                            type="submit"
                            ref={buttonRef}
                            className={styles.btnPosnawr}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className={styles.hoverEffect}></span>
                            <span className={styles.buttonText}>Get CV</span>
                        </button>
                    </a>

                </div>

            </section >

            <section className={styles.section3}>


            </section>
        </div >
    )
}

export default AboutMore