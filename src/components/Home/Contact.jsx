import Style from "../../style/Home.module.css"

function Contact() {

    function sendEmail() {
        alert("Under Construction")
    }
    return (
        <>
            <div className={Style.contactContainer}>
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
                        <button type="submit" onClick={() => sendEmail()}>Get in touch</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact