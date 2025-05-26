import Style from "../../style/Home.module.css"
import { ThemeContext } from "../../App"
import React, { useContext } from "react"
import Particles from "../ReactBits/Particles"
import MagnetLines from "../ReactBits/MagnetLines"


function Greeting() {

    const theme = useContext(ThemeContext)

    return (
        <>
            <div className={Style.greeting} id="greeting">

                <Particles
                    particleColors={[theme ? "#F6F4F2" : "#1C0F13", theme ? "#1C0F13" : "#F6F4F2"]}
                    particleCount={300}
                    particleSpread={30}
                    speed={0.3}
                    particleBaseSize={300}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
                <div className={Style.greetingContainer} >
                    <div className={Style.bigGreeting} id="bigGreeting">
                        HI, I'M
                        FAHREL
                    </div>
                    <div className={Style.greetingShape}>
                        <MagnetLines
                            rows={10}
                            columns={15}
                            containerSize="100%"
                            lineColor={theme ? "#F6F4F2" : "#1C0F13"}
                            lineWidth="0.4vmin"
                            lineHeight="5vmin"
                            baseAngle={0}
                            style={{ margin: "0 auto" }}
                        />
                    </div>
                    <p id="pGreeting">
                        As a passionate full-stack developer, I am dedicated to transforming ideas into immersive digital experiences, meticulously crafting seamless and intuitive user journeys from initial concept to a polished, fully functional product.
                    </p>
                </div>
            </div>
        </>
    )
}
export default Greeting