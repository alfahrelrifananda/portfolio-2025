import Style from "../style/ComponentsModule/Footer.module.css"
import React, { useContext } from "react"
import { ThemeContext } from "../App"
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