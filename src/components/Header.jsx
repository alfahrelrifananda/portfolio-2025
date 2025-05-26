import { useEffect, useState } from "react"
import Style from "../style/Header.module.css"
import { animate, stagger } from "framer-motion"
import StyleMenu from "../style/Menu.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Header() {

    const dates = new Date()
    const day = dates.getDay()
    const date = dates.getDate()
    const month = dates.getMonth()
    const year = dates.getFullYear()

    const [isMenuOpen, setIsMenuOpen] = useState(false)


    let days = null
    let months = null
    let menu = "(menu)"


    switch (day) {
        case 0:
            days = "Minggu"
            break;
        case 1:
            days = "Senin"
            break;
        case 2:
            days = "Selasa"
            break;
        case 3:
            days = "Rabu"
            break;
        case 4:
            days = "Kamis"
            break;
        case 5:
            days = "Jum'at"
            break;
        case 6:
            days = "Sabtu"
            break;
        default:
            break;
    }

    switch (month) {
        case 0:
            months = "Januari"
            break;
        case 1:
            months = "Februari"
            break;
        case 2:
            months = "Maret"
            break;
        case 3:
            months = "April"
            break;
        case 4:
            months = "Mei"
            break;
        case 5:
            months = "Juni"
            break;
        case 6:
            months = "Juli"
            break;
        case 7:
            months = "Agustus"
            break;
        case 8:
            months = "September"
            break;
        case 9:
            months = "Oktober"
            break;
        case 10:
            months = "Novmber"
            break;
        case 11:
            months = "Desember"
            break;
        default:
            break;
    }


    useEffect(() => {
        animate(".logoname li", {
            opacity: 1, y: [30, 0]
        }, {
            delay: stagger(0.1)
        })
    },)

    function toggleMenu() {
        const menu = document.getElementById("theMenu")
        const menuContainer = document.getElementById("theMenuContainer")

        if (!isMenuOpen) {
            menu.style.zIndex = "88"
            menu.style.opacity = "1"
            menuContainer.style.opacity = "1"
            setIsMenuOpen(true)
        } else {
            menu.style.zIndex = "-88"
            menu.style.opacity = "0"
            menuContainer.style.opacity = "0"
            setIsMenuOpen(false)
        }
    }

    return (
        <>
            <header className={Style.header} >
                <div className={Style.headerContainer}>
                    <div className={Style.logo}>
                        <div className={Style.logoContainer}>
                            <ul className="logoname">
                                <li>F</li>
                                <li>A</li>
                                <li>H</li>
                                <li>R</li>
                                <li>E</li>
                                <li>L</li>
                            </ul>
                        </div>
                    </div>
                    <div className={Style.date}>
                        <p>Portfolio {year}</p>
                        <p>{`${days}, ${date} ${months}, ${year}`}</p>
                    </div>
                    <div className={Style.menuButton}
                        id="menu-btn" onClick={toggleMenu}>
                        <ul className="menu-btn">
                            <p>{menu}</p>
                        </ul>
                    </div>
                </div>
            </header>
            <div className={StyleMenu.menu} id="theMenu">
                <div className={StyleMenu.menuContainer} id="theMenuContainer">
                    <div className={StyleMenu.menuContent}>
                        <div className={StyleMenu.menuList}>
                            <a href="#">
                                <div className={StyleMenu.li}>
                                    <p>01</p>
                                    <h3>
                                        <span>
                                            <span>H</span>
                                            <span>O</span>
                                            <span>M</span>
                                            <span>E</span>
                                        </span>
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowUp} className={StyleMenu.arrow} />
                                    </div>
                                </div>
                                <div className={StyleMenu.lines}>
                                    <div className={StyleMenu.line}></div>
                                    <div className={StyleMenu.lineChild}></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className={StyleMenu.li}>
                                    <p>02</p>
                                    <h3>
                                        <span>
                                            <span>A</span>
                                            <span>B</span>
                                            <span>O</span>
                                            <span>U</span>
                                            <span>T</span>
                                        </span>
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowUp} className={StyleMenu.arrow} />
                                    </div>
                                </div>
                                <div className={StyleMenu.lines}>
                                    <div className={StyleMenu.line}></div>
                                    <div className={StyleMenu.lineChild}></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className={StyleMenu.li}>
                                    <p>03</p>
                                    <h3>
                                        <span>
                                            <span>P</span>
                                            <span>R</span>
                                            <span>O</span>
                                            <span>J</span>
                                            <span>E</span>
                                            <span>C</span>
                                            <span>T</span>
                                        </span>
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowUp} className={StyleMenu.arrow} />
                                    </div>
                                </div>
                                <div className={StyleMenu.lines}>
                                    <div className={StyleMenu.line}></div>
                                    <div className={StyleMenu.lineChild}></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className={StyleMenu.li}>
                                    <p>04</p>
                                    <h3>
                                        <span>
                                            <span>B</span>
                                            <span>L</span>
                                            <span>O</span>
                                            <span>G</span>
                                        </span>
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowUp} className={StyleMenu.arrow} />
                                    </div>
                                </div>
                                <div className={StyleMenu.lines}>
                                    <div className={StyleMenu.line}></div>
                                    <div className={StyleMenu.lineChild}></div>
                                </div>
                            </a>
                            <a href="#">
                                <div className={StyleMenu.li}>
                                    <p>05</p>
                                    <h3>
                                        <span>
                                            <span>C</span>
                                            <span>O</span>
                                            <span>N</span>
                                            <span>T</span>
                                            <span>A</span>
                                            <span>C</span>
                                            <span>T</span>
                                        </span>
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={faArrowUp} className={StyleMenu.arrow} />
                                    </div>
                                </div>
                                <div className={StyleMenu.lines}>
                                    <div className={StyleMenu.line}></div>
                                    <div className={StyleMenu.lineChild}></div>
                                </div>
                            </a>
                        </div>
                        <div className={StyleMenu.menuContact}>
                            <ul>
                                <li>
                                    <h5>mail</h5>
                                    <p>pahrel1234@gmail.com</p>
                                </li>
                                <li>
                                    <h5>phone</h5>
                                    <p>(+62)-895-2546-5723</p>
                                </li>
                                <li>
                                    <h5>address</h5>
                                    <p>Banyuagung, Kadipiro, Banjarsari, Surakarta</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={StyleMenu.menuLabel}>
                        <h1>
                            CREATIVITY IN MOTION
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header