import Style from "../../style/HomeModule/Home.module.css"
import { useRef, useCallback } from "react"
import ScrollVelocity from "../ReactBits/ScrollVelocity"

function Contact() {

    function sendEmail() {
        alert("Under Construction")
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
        <>
            <ScrollVelocity
                texts={['', 'CONTACT ME -']}
                className="custom-scroll-text"
            />
            <div className={Style.contactContainer} id="contactContainer">
                <div className={Style.contactImage}>
                </div>
                <div className={Style.contactContent}>
                    <h1>Let's work together !</h1>
                    <p>Drop me a message, and let's turn your ideas into reality. Excited to collaborate on your next creative project!</p>
                    <form action="">
                        <div>
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                            <input type="number" placeholder="Phone" />
                        </div>
                        <textarea name="message" placeholder="Message" ></textarea>
                        <div className={Style.btncontainer}>
                            <button
                                type="submit" onClick={() => sendEmail()}
                                ref={buttonRef}
                                className={Style.btnPosnawr}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className={Style.hoverEffect}></span>
                                <span className={Style.buttonText}>Get in touch</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Contact