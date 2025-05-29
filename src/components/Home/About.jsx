import Style from "../../style/Home.module.css"
import ScrollReveal from '../ReactBits/ScrollReveal'
import { ThemeContext } from "../../App"
import { useLayoutEffect } from "react"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import ScrollTrigger from "gsap/ScrollTrigger"
function About() {

    useLayoutEffect(() => {

        gsap.registerPlugin(SplitText, ScrollTrigger);
        console.clear();
        gsap.set("#aboutContent p", { opacity: 1 });
        gsap.set("#aboutSkillSpan span", { opacity: 1 });

        document.fonts.ready.then(() => {
            let containers = gsap.utils.toArray("#aboutContent");

            containers.forEach((container) => {
                let text = container.querySelectorAll("#aboutContent p");

                SplitText.create(text, {
                    type: "words,lines",
                    mask: "lines",
                    linesClass: "line",
                    autoSplit: true,
                    onSplit: (instance) => {
                        console.log("split")
                        return gsap.from(instance.lines, {
                            yPercent: 120,
                            stagger: 0.1,

                            scrollTrigger: {
                                trigger: container,
                                scrub: true,
                                once: true,
                                start: "clamp(-500 top)",
                                end: "clamp(200 center)"
                            }
                        });
                    }
                });

            });
        });
    })
    return (
        <>
            <div className={Style.aboutContainer} id="aboutContainer">
                <div className={Style.aboutImage}></div>
                <div className={Style.aboutContent} id="aboutContent">
                    <p>
                        In a previous life, I honed my skills at SMKN 5 Surakarta in Computer Science. From that time, I’ve carried over the ability to program web and application interfaces, along with a constant drive to make UIs appealing and a genuine love for learning new things.
                    </p>
                    <p>
                        Today, I'm a fresh graduate passionate about full-stack, mobile, and UI/UX development. My experience includes an internship at Digimizu, where I worked with video editing, WordPress, and Laravel. Currently, my favorite playgrounds are React and Flutter, where I'm always looking to push the experience further. I believe that delivering an enjoyable and stress-free process is just as important as the final product, and I always bring that energy and attention to detail to my work. While I'm continually working to improve my collaboration skills, I'm fiercely dedicated to ensuring tasks are finished on time.
                    </p>
                    <p>

                    </p>
                    <p>
                        Outside of development, you’ll probably find me enjoying Indonesian indie music or immersed in literature, often influenced by philosophers like Nietzsche.
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
                        <span>MySQL</span>
                        <span>Firebase</span>
                        <span>Supabase</span>
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