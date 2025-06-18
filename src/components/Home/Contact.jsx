import Style from "../../style/HomeModule/Contact.module.css"
import { useRef, useCallback, lazy } from "react"
import emailjs from "emailjs-com"
const ScrollVelocity = lazy(() => import("../ReactBits/ScrollVelocity"))

function Contact() {

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const errMsg = useRef()
    const succMsg = useRef()
    const buttonRef = useRef(null)

    function handleOnSubmit(e) {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                succMsg.current.style.visibility = "visible"
                errMsg.current.style.visibility = "hidden"
            }, (error) => {
                console.error(error.text);
                succMsg.current.style.visibility = "hidden"
                errMsg.current.style.visibility = "visible"
            });
        e.target.reset()
    }
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
                    <h1 className={Style.contactContentT}>Let's work together !</h1>
                    <p className={Style.contactContentP}>Drop me a message, and let's turn your ideas into reality. Excited to collaborate on your next creative project!</p>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div>
                            <input type="text" placeholder="First Name" name="from_first_name" required />
                            <input type="text" placeholder="Last Name" name="from_last_name" required />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" name="from_email" required />
                            <input type="number" placeholder="Phone" name="from_phone" required />
                        </div>
                        <textarea name="message" placeholder="Message" required></textarea>
                        <div className={Style.btncontainer}>
                            <button
                                type="submit"
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
                    <p className={Style.errMsg} ref={errMsg}>Something went wrong!</p>
                    <p className={Style.succMsg} ref={succMsg}>Message Sent Successfully!</p>
                </div>
            </div >
        </>
    )
}

export default Contact