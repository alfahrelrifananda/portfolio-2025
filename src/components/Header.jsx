import { useLayoutEffect, useState } from "react"
import Style from "../style/ComponentsModule/Header.module.css"
import StyleMenu from "../style/ComponentsModule/Menu.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
import { HashLink } from "react-router-hash-link"

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

    function closeMenu() {
        const menu = document.getElementById("theMenu")
        const menuToggle = document.getElementById("menu-btn")
        const menuContainer = document.getElementById("theMenuContainer")
        const menuHeaderContainer = document.getElementById("headerContainer")
        const menuDateContainer = document.getElementById("dateContainer")
        menu.style.zIndex = "-88"
        menu.style.opacity = "0"
        menuContainer.style.opacity = "0"
        menuToggle.textContent = "(menu)"
        menuToggle.style.color = "var(--primary-dark)"
        menuDateContainer.style.color = "var(--primary-dark)"
        menuHeaderContainer.style.borderBottomColor = "var(--primary-dark)"
        document.documentElement.style.overflowY = "auto"
        document.body.style.overflowY = "auto"
        setIsMenuOpen(false)
    }
    function toggleMenu() {
        const menu = document.getElementById("theMenu")
        const menuToggle = document.getElementById("menu-btn")
        const menuContainer = document.getElementById("theMenuContainer")
        const menuHeaderContainer = document.getElementById("headerContainer")
        const menuDateContainer = document.getElementById("dateContainer")
        if (!isMenuOpen) {
            menu.style.zIndex = "88"
            menu.style.opacity = "1"
            menuContainer.style.opacity = "1"
            menuToggle.textContent = "(close)"
            menuToggle.style.color = "#F6F4F2"
            menuDateContainer.style.color = "#F6F4F2"
            menuHeaderContainer.style.borderBottomColor = "#F6F4F2"
            document.documentElement.style.overflowY = "hidden"
            document.body.style.overflowY = "hidden"
            setIsMenuOpen(true)
        } else {
            closeMenu()
        }
    }

    // useEffect(() => {
    //     const contactContainer = document.getElementById("contactContainer")
    //     const headerContainer = document.getElementById("headerContainer")
    //     const logoContainer = document.getElementById("logoContainer")
    //     const dateContainer = document.getElementById("dateContainer")
    //     const menuBtn = document.getElementById("menu-btn")


    //     function isInViewport(element) {
    //         const bounding = element.getBoundingClientRect();
    //         if (
    //             bounding.top >= 0
    //         ) {
    //             return true

    //         } else {
    //             return false

    //         }
    //     }

    //     window.addEventListener('scroll', () => {
    //         if (isInViewport(contactContainer)) {
    //             headerContainer.style.borderBottomColor = "var(--primary-dark)"
    //             logoContainer.style.backgroundColor = "var(--primary-dark)"
    //             logoContainer.style.color = "var(--primary-light)"
    //             dateContainer.style.color = "var(--primary-dark)"
    //             menuBtn.style.color = "var(--primary-dark)"
    //         } else {
    //             headerContainer.style.borderBottomColor = "var(--primary-light)"
    //             logoContainer.style.backgroundColor = "var(--primary-light)"
    //             logoContainer.style.color = "var(--primary-dark)"
    //             dateContainer.style.color = "var(--primary-light)"
    //             menuBtn.style.color = "var(--primary-light)"
    //         }
    //     }, true);
    // })

    useLayoutEffect(() => {
        gsap.registerPlugin(SplitText);
        gsap.set("span", { opacity: 1 });
        gsap.set("h1", { opacity: 1 });
        let split = [
            SplitText.create(".menu-list-label", { type: "chars" }),
            SplitText.create(".menu-big-label", { type: "chars" })
        ]

        gsap.from(split[0].chars, {
            y: 20,
            autoAlpha: 0,
            stagger: 0.05
        });
        gsap.from(split[1].chars, {
            y: 20,
            autoAlpha: 0,
            stagger: 0.05
        });




    },)



    return (
        <>
            <header className={Style.header} >
                <div className={Style.headerContainer} id="headerContainer">
                    <div className={Style.logo}>
                        <div className={Style.logoContainer} id="logoContainer">
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
                    <div className={Style.date} id="dateContainer">
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
                            <HashLink smooth to="/portfolio-2025/" className={StyleMenu.link} onClick={closeMenu}>

                                <div className={StyleMenu.li}>
                                    <p>01</p>
                                    <h3>
                                        <span className="menu-list-label">
                                            HOME
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
                            </HashLink>
                            <HashLink smooth to="/portfolio-2025/#aboutTreshold"
                                className={StyleMenu.link}
                                onClick={closeMenu}
                            >

                                <div className={StyleMenu.li}>
                                    <p>02</p>
                                    <h3>
                                        <span className="menu-list-label">
                                            ABOUT
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
                            </HashLink>
                            <HashLink smooth to="/portfolio-2025#projectTreshold" className={StyleMenu.link} onClick={closeMenu}>

                                <div className={StyleMenu.li}>
                                    <p>03</p>
                                    <h3>
                                        <span className="menu-list-label">
                                            PROJECT
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
                            </HashLink>
                            <HashLink smooth to="/portfolio-2025#blogTreshold" className={StyleMenu.link} onClick={closeMenu}>

                                <div className={StyleMenu.li}>
                                    <p>04</p>
                                    <h3>
                                        <span className="menu-list-label">
                                            BLOG
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
                            </HashLink>
                            <HashLink smooth to="/portfolio-2025#contactTreshold" className={StyleMenu.link} onClick={closeMenu}>

                                <div className={StyleMenu.li}>
                                    <p>05</p>
                                    <h3>
                                        <span className="menu-list-label">
                                            CONTACT
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
                            </HashLink>
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
                        <h1 className="menu-big-label">
                            CREATIVITY IN MOTION
                        </h1>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header