import Style from "../../style/Home.module.css"
import ScrollReveal from '../ReactBits/ScrollReveal'
import { ThemeContext } from "../../App"

function About() {


    return (
        <>
            <div className={Style.aboutContainer} id="aboutContainer">
                <div className={Style.aboutImage}></div>
                <div className={Style.aboutContent}>
                    <p>
                        In a previous life, I worked in the music industry, navigating the worlds of marketing and sales. From that time, I’ve carried over a deep sense of curiosity, a constant drive to improve, and a genuine love for collaboration.
                    </p>
                    <p>
                        Today, I’m a developer based in Paris, passionate about creating interfaces that spark — with subtle details, bold animations, and a strong focus on performance.
                    </p>
                    <p>
                        I believe animations are only as good as the design they enhance, and I’m always looking to push the experience further. My favorite playgrounds are GSAP and shaders. I’ve explored them through various interactive experiments, and I’ve even started sharing what I’ve learned through articles and tutorials (soon to be published here).
                    </p>
                    <p>
                        I work with all kinds of clients — from startups to digital agencies — and whether I’m in their office or working remotely, I always bring the same energy and attention to detail.
                    </p>
                    <p>
                        Outside of development, you’ll probably find me reading literature, swimming laps, or watching contemporary theatre. I also play chess — badly (730 ELO and proudly stuck there) — but I keep coming back for more.
                    </p>
                    <p className={Style.title}>Tech i love to use</p>
                    <div>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                        <span>Wordpess</span>
                        <span>Figma</span>
                        <span>React</span>
                        <span>Flutter</span>
                        <span>Java</span>
                        <span>Kotlin</span>
                        <span>PHP</span>
                        <span>Laravel</span>
                        <span>Github</span>
                    </div>
                </div>
            </div>
            {/* <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                From Solo, Indonesia. Creative developer driven by a love for crafting digital magic. With a passion for innovative solutions, I transform ideas into captivating online experiences.
            </ScrollReveal> */}
        </>
    )
}

export default About