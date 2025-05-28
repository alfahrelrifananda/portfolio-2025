import Style from "../../style/Home.module.css"
import { ThemeContext } from "../../App"
import React, { useContext, useLayoutEffect } from "react"
import Particles from "../ReactBits/Particles"
import MagnetLines from "../ReactBits/MagnetLines"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"

function Greeting() {

    const theme = useContext(ThemeContext)


    useLayoutEffect(() => {

        gsap.registerPlugin(SplitText);
        console.clear();
        document.fonts.ready.then(() => {
            gsap.set("#bigGreeting", { opacity: 1 });
            gsap.set("#pGreeting", { opacity: 1 });

            let split;
            SplitText.create("#bigGreeting", {
                type: "words,lines",
                linesClass: "line",
                autoSplit: true,
                mask: "lines",
                onSplit: (self) => {
                    split = gsap.from(self.lines, {
                        duration: 1.0,
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "expo.out",
                    });
                    return split;
                }
            });
            SplitText.create("#pGreeting", {
                type: "words,lines",
                linesClass: "line",
                autoSplit: true,
                mask: "lines",
                onSplit: (self) => {
                    split = gsap.from(self.lines, {
                        duration: 1.0,
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "expo.out",
                    });
                    return split;
                }
            });
        });

    })
    return (
        <>
            <div className={Style.greeting} id="greetingContainer">

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
                <div className={Style.greetingContainer} id="containerGreeting">
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