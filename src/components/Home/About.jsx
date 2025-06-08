import React, {lazy} from "react"
import Style from "../../style/HomeModule/Home.module.css"
const ScrollVelocity = lazy(() => import("../ReactBits/ScrollVelocity"))

function About() {

    return (
        <>
            <div className={Style.aboutReferences} id="aboutContainer"></div>
            <ScrollVelocity
                texts={['ABOUT ME -']}
                className="custom-scroll-text"
            />
            <div className={Style.aboutContainer} >
                <div className={Style.aboutImage}></div>
                <div className={Style.aboutContent} id="aboutContent">
                    <p className={Style.aboutContentP}>
                        In a previous life, I honed my skills at SMKN 5 Surakarta in Computer Science. From that time, I’ve carried over the ability to program web and application interfaces, along with a constant drive to make UIs appealing and a genuine love for learning new things.
                    </p>
                    <p className={Style.aboutContentP}>
                        Today, I'm a fresh graduate passionate about full-stack, mobile, and UI/UX development. My experience includes an internship at Digimizu, where I worked with video editing, WordPress, and Laravel. Currently, my favorite playgrounds are React and Flutter, where I'm always looking to push the experience further. I believe that delivering an enjoyable and stress-free process is just as important as the final product, and I always bring that energy and attention to detail to my work. While I'm continually working to improve my collaboration skills, I'm fiercely dedicated to ensuring tasks are finished on time.
                    </p>
                    <p className={Style.aboutContentP}>
                        Outside of development, you’ll probably find me enjoying Indonesian indie music or immersed in literature, often influenced by philosophers like Nietzsche.
                    </p>
                    <p className={Style.aboutContentT}>Tech i love to use</p>
                    <div>
                        <span className={Style.aboutContentSpan}>HTML</span>
                        <span className={Style.aboutContentSpan}>CSS</span>
                        <span className={Style.aboutContentSpan}>JavaScript</span>
                        <span className={Style.aboutContentSpan}>Wordpess</span>
                        <span className={Style.aboutContentSpan}>Figma</span>
                        <span className={Style.aboutContentSpan}>React</span>
                        <span className={Style.aboutContentSpan}>Flutter</span>
                        <span className={Style.aboutContentSpan}>Java</span>
                        <span className={Style.aboutContentSpan}>Kotlin</span>
                        <span className={Style.aboutContentSpan}>PHP</span>
                        <span className={Style.aboutContentSpan}>Laravel</span>
                        <span className={Style.aboutContentSpan}>Github</span>
                        <span className={Style.aboutContentSpan}>MySQL</span>
                        <span className={Style.aboutContentSpan}>Firebase</span>
                        <span className={Style.aboutContentSpan}>Supabase</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About