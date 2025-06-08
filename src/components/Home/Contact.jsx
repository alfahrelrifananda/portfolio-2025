import Style from "../../style/HomeModule/Home.module.css"
import { useRef, useCallback, lazy } from "react"
import emailjs from "emailjs-com"
const ScrollVelocity = lazy(() => import("../ReactBits/ScrollVelocity"))
const SERVICE_ID = "service_3utxlwh"
const TEMPLATE_ID = "template_6r3xst7"
const PUBLIC_KEY = "3jy8yLViJz0kcyZEt"
function Contact() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message Sent Successfully')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong!')
            });
        e.target.reset()
    };
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
                    <h1 className={Style.contactContentT}>Let's work together !</h1>
                    <p className={Style.contactContentP}>Drop me a message, and let's turn your ideas into reality. Excited to collaborate on your next creative project!</p>
                    <form action="" onSubmit={handleOnSubmit}>
                        <div>
                            <input type="text" placeholder="First Name" name="from_first_name"/>
                            <input type="text" placeholder="Last Name" name="from_last_name" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email" name="from_email" />
                            <input type="number" placeholder="Phone" name="from_phone" />
                        </div>
                        <textarea name="message" placeholder="Message" ></textarea>
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
                </div>
            </div >
        </>
    )
}

export default Contact