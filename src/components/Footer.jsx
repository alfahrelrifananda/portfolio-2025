import Style from "../style/Footer.module.css"
import Particles from "./ReactBits/Particles"
import React, { useContext } from "react"
import { ThemeContext } from "../App"
import TextPressure from "./ReactBits/TextPressure"
import Waves from "./ReactBits/Waves"
import MagnetLines from "./ReactBits/MagnetLines"

function Footer() {

    const theme = useContext(ThemeContext)

    return (
        <>
            <footer className={Style.footer}>
                <div className={Style.contact}>
                    <p>pahrel1234@gmail.com</p>
                    <p>Banyuagung, Kadipiro, Banjarsari, Surakarta</p>
                    <p>(+62)-895-2546-5723</p>
                    <a href="#">Instagram</a>
                </div>
                <div className={Style.waves}>
                    {/* <Particles
                        particleColors={[theme ? "#F6F4F2" : "#1C0F13", theme ? "#F6F4F2" : "#1C0F13"]}
                        particleCount={300}
                        particleSpread={25}
                        speed={0.1}
                        particleBaseSize={150}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    /> */}
                    <MagnetLines
                        rows={10}
                        columns={15}
                        containerSize="100%"
                        lineColor={theme ? "#1C0F13" : "#F6F4F2"}
                        lineWidth="0.4vmin"
                        lineHeight="5vmin"
                        baseAngle={0}
                        style={{ margin: "0 auto" }}
                    />
                    {/* <TextPressure
                        text="FAHREL"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor={[theme ? "#F6F4F2" : "#1C0F13", theme ? "#F6F4F2" : "#1C0F13"]}
                        strokeColor={[theme ? "#F6F4F2" : "#1C0F13", theme ? "#F6F4F2" : "#1C0F13"]}
                        minFontSize={36}
                    /> */}
                    {/* <Waves
                        lineColor={theme ? "#1C0F13" : "#F6F4F2"}
                        backgroundColor={theme ? "#F6F4F2" : "#1C0F13"}
                        style={{ height: "50vh" }}
                        waveSpeedX={0.02}
                        waveSpeedY={0.01}
                        waveAmpX={40}
                        waveAmpY={30}
                        friction={0.9}
                        tension={0.01}
                        // maxCursorMove={120}
                        xGap={12}
                        yGap={36}
                    /> */}
                </div>
                <div className={Style.copyright}>
                    <p>Privacy Policy</p>
                    <p>@Fahrel 2025</p>
                    <p>Terms and Conditions</p>
                </div>
            </footer>
        </>
    )
}

export default Footer