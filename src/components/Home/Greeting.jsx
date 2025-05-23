import Style from "../../style/Home.module.css"
import MetaBalls from "../ReactBits/MetaBalls"
import LiquidChrome from "../ReactBits/LiquidChrome"
import { ThemeContext } from "../../App"
import React, { useContext } from "react"
import Particles from "../ReactBits/Particles"



function Greeting() {

    const theme = useContext(ThemeContext)

    return (
        <>
            <div className={Style.greeting} id="greeting">
                {/* <MetaBalls
                    color={theme ? "#F6F4F2" : "#1C0F13"}
                    cursorBallColor={theme ? "#F6F4F2" : "#1C0F13"}
                    cursorBallSize={1}
                    ballCount={1}
                    animationSize={130}
                    enableMouseInteraction={true}
                    enableTransparency={false}
                    hoverSmoothness={0.05}
                    clumpFactor={4}
                    speed={0.3}
                /> */}
                {/* <LiquidChrome
                    baseColor={[0.1, 0.1, 0.1]}
                    speed={0.3}
                    amplitude={0.3}
                    interactive={false}
                /> */}

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
                        HI, I'M <br />
                        FAHREL

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