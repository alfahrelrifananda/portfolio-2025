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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita iure molestias beatae magnam maiores eligendi quaerat quod laboriosam quasi ut voluptatum modi culpa vero dolores, at architecto laborum velit eum.
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto, fugit magni id adipisci placeat deserunt exercitationem ea reiciendis, possimus asperiores aliquam natus autem numquam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius exercitationem obcaecati sed nesciunt accusamus beatae earum, temporibus voluptates blanditiis tempore magni atque, repellendus facere quas vitae. Officiis quae aliquam, pariatur reiciendis perferendis autem et sit quidem, a, dicta libero tempora!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, nihil ut expedita, voluptate, qui vel repellendus inventore perspiciatis doloribus iusto repudiandae veritatis atque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odio illum quod, doloribus minus nobis sequi, voluptatum nostrum earum modi, similique reprehenderit perspiciatis? Ipsam at consectetur natus.
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