import React, { lazy } from "react";
import Link from "../Utils/CustomLinkR";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Style from "../style/ProjectModule/Project.module.css"
const Footer = lazy(() => import("../components/Footer"));

import chaImg1 from "../assets/project_image/cha/img_1_plc.png"
import chaImg2 from "../assets/project_image/cha/img_2_plc.png"
import chaImg3 from "../assets/project_image/cha/img_3_plc.png"
import chaImg4 from "../assets/project_image/cha/img_4_plc.png"
import chaImg5 from "../assets/project_image/cha/img_5_plc.png"

import todoImg1 from "../assets/project_image/todo/img_1_plc.png"
import todoImg2 from "../assets/project_image/todo/img_2_plc.png"

import belaImg1 from "../assets/project_image/bel/img_1_plc.png"
import belaImg2 from "../assets/project_image/bel/img_2_plc.png"
import belaImg3 from "../assets/project_image/bel/img_3_plc.png"
import belaImg4 from "../assets/project_image/bel/img_4_plc.png"

import andImg1 from "../assets/project_image/and/img_1_plc.png"
import andImg2 from "../assets/project_image/and/img_2_plc.png"

import posImg1 from "../assets/project_image/pos/img_1_plc.png"
import posImg2 from "../assets/project_image/pos/img_2_plc.png"
import posImg3 from "../assets/project_image/pos/img_3_plc.png"
import posImg4 from "../assets/project_image/pos/img_4_plc.png"
import posImg5 from "../assets/project_image/pos/img_5_plc.png"

export const Chameleon = () => {
    return (
        <>
            <div className={Style.introduction}>
                <div className={Style.introductionTitle}>
                    <h1>Chameleon</h1>
                    <p>As a student at SMK, I developed Chameleon, a Flutter application designed to be similar to Pinterest for a school assignment. The project focused on creating a visually engaging and highly customizable user experience, leveraging Material 3 guidelines and dynamic color capabilities. Chameleon provides a rich and versatile interface for users to explore and organize content, with its adaptive theming ensuring a personalized and responsive interaction flow that adjusts to the user's device settings.
                    </p>
                </div>
                <div className={Style.introductionStatus}>
                    <div className={Style.introductionClient}>
                        <p>Client</p>
                        <i>School Assignment</i>
                    </div>
                    <div className={Style.introductionName}>
                        <p>Project</p>
                        <i>Chameleon</i>
                    </div>
                    <div className={Style.introductionCurrent}>
                        <p>Status</p>
                        <i>Released</i>
                    </div>
                </div>
            </div>
            <div className={Style.projectImage}>
                <img src={chaImg1} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectText}>
                <p>
                    We developed Chameleon using the Flutter framework, leveraging its robust capabilities for UI development. The project extensively utilized Material 3 components and dynamic color to deliver a modern and adaptive user experience. This approach allowed us to efficiently build a visually appealing and highly customizable application while focusing on Flutter's built-in state management and navigation for a seamless user flow.
                </p>
            </div>
            <div className={Style.projectImage}>
                <img src={chaImg4} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectImageFlex}>
                <img src={chaImg2} alt="" loading="lazy" />
                <img src={chaImg3} alt="" loading="lazy" />
            </div>
            <div className={Style.projectTextCenter}>
                <p>
                    To bring visual richness and a modern feel to Chameleon, I heavily utilized Material 3 guidelines and dynamic color. These features allowed the app to adapt its appearance based on the user's device settings, ensuring a personalized and vibrant user experience. The smooth transitions and animations inherent in the Flutter framework also contributed to a fluid and responsive design, making the app visually appealing and intuitive to navigate.
                </p>
            </div >
            <div className={Style.projectImage}>
                <img src={chaImg5} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenterSc}>
                <a href="https://github.com/alfahrelrifananda/chameleon">Source Code</a>
            </div>
            <div className={Style.projectPrevAndNext}>
                <Link to="/" reloadDocument className={Style.link}>
                </Link>
                <Link to="/project/todo" reloadDocument className={Style.link}>
                    <p>Next</p>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                </Link>
            </div>
            <div className="tresholdContainer">
                <div className="tresholdBox"></div>
                <div className="tresholdLine"></div>
            </div >
            <Footer />
        </>
    )
}
export const Todo = () => {
    return (
        <>
            <div className={Style.introduction}>
                <div className={Style.introductionTitle}>
                    <h1>Todo</h1>
                    <p>I developed Todo, a simple Flutter application, primarily out of personal interest. This project aimed to create a clean and intuitive to-do list experience, utilizing Material 3 design principles to ensure a modern and consistent interface. The app allows users to organize their tasks with categories, providing a straightforward yet effective way to manage daily activities.
                    </p>
                </div>
                <div className={Style.introductionStatus}>
                    <div className={Style.introductionClient}>
                        <p>Client</p>
                        <i>Personal Project</i>
                    </div>
                    <div className={Style.introductionName}>
                        <p>Project</p>
                        <i>Todo</i>
                    </div>
                    <div className={Style.introductionCurrent}>
                        <p>Status</p>
                        <i>Released</i>
                    </div>
                </div>
            </div>
            <div className={Style.projectImage}>
                <img src={todoImg1} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenter}>
                <p>
                    I developed the application using the Flutter framework, focusing on a streamlined approach for a simple to-do list. The core functionality, including task management, categorization, and basic navigation, was implemented using Flutter's native capabilities. This allowed for efficient development and ensured a consistent user experience, adhering to the principles of Material 3 for a clean and modern interface.
                </p>
            </div>
            <div className={Style.projectImage}>
                <img src={todoImg2} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenterSc}>
                <a href="https://github.com/alfahrelrifananda/Todo">Source Code</a>
            </div>
            <div className={Style.projectPrevAndNext}>
                <Link to="/project/chameleon" reloadDocument className={Style.link}>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrowL} />
                    <p>Prev</p>
                </Link>
                <Link to="/project/belatarr" reloadDocument className={Style.link}>
                    <p>Next</p>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                </Link>
            </div>
            <div className="tresholdContainer">
                <div className="tresholdBox"></div>
                <div className="tresholdLine"></div>
            </div >
            <Footer />
        </>
    )
}
export const BelaTarr = () => {
    return (
        <>
            <div className={Style.introduction}>
                <div className={Style.introductionTitle}>
                    <h1>Bela Tarr</h1>
                    <p>I developed Bela Tarr, a static website, as an English assignment during my time at SMK. The project aimed to create a simple, minimalist biography of the director and producer Bela Tarr. Built using HTML, CSS, and JavaScript, the website features a dark and clean design, focusing on presenting information clearly and effectively.
                    </p>
                </div>
                <div className={Style.introductionStatus}>
                    <div className={Style.introductionClient}>
                        <p>Client</p>
                        <i>English School Assignment</i>
                    </div>
                    <div className={Style.introductionName}>
                        <p>Project</p>
                        <i>Bela Tarr</i>
                    </div>
                    <div className={Style.introductionCurrent}>
                        <p>Status</p>
                        <i>Finished</i>
                    </div>
                </div>
            </div>
            <div className={Style.projectImage}>
                <img src={belaImg1} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectText}>
                <p>
                    For this website, I developed the entire front-end using HTML, CSS, and JavaScript. The project focused on a straightforward static structure, with custom CSS for its dark and minimalist aesthetic and JavaScript for any interactive elements. This approach allowed for complete control over the site's presentation and ensured a lightweight, focused experience tailored to its biographical content.
                </p>
            </div>
            <div className={Style.projectImageFlex}>
                <img src={belaImg3} alt="" loading="lazy" />
                <img src={belaImg4} alt="" loading="lazy" />
            </div>
            <div className={Style.projectTextCenter}>
                <p>
                    This website's visual design centered on a dark and minimalist aesthetic, achieved entirely through custom CSS. This approach ensured a clean and uncluttered presentation, allowing the content to take precedence. While focusing on simplicity, subtle CSS techniques were employed to create a visually cohesive and elegant user experience, aligning with the project's biographical nature.
                </p>
            </div >
            <div className={Style.projectImage}>
                <img src={belaImg2} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenterSc}>
                <a href="https://github.com/alfahrelrifananda/Bela-Tarr">Source Code</a>
            </div>
            <div className={Style.projectPrevAndNext}>
                <Link to="/project/todo" reloadDocument className={Style.link}>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrowL} />
                    <p>Prev</p>
                </Link>
                <Link to="/project/androidinfo" reloadDocument className={Style.link}>
                    <p>Next</p>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                </Link>
            </div>
            <div className="tresholdContainer">
                <div className="tresholdBox"></div>
                <div className="tresholdLine"></div>
            </div >
            <Footer />
        </>
    )
}
export const AndroidInfo = () => {
    return (
        <>
            <div className={Style.introduction}>
                <div className={Style.introductionTitle}>
                    <h1>Android Info</h1>
                    <p>I developed Android Info, a Flutter application, out of personal interest to display simple Android system information. This project aimed to create a clean and informative user experience by leveraging Material 3 design principles and dynamic color capabilities. The app provides quick access to details like battery status and system specifications, offering a straightforward yet visually engaging way to monitor device information.
                    </p>
                </div>
                <div className={Style.introductionStatus}>
                    <div className={Style.introductionClient}>
                        <p>Client</p>
                        <i>Personal Project</i>
                    </div>
                    <div className={Style.introductionName}>
                        <p>Project</p>
                        <i>Android Info</i>
                    </div>
                    <div className={Style.introductionCurrent}>
                        <p>Status</p>
                        <i>Released</i>
                    </div>
                </div>
            </div>
            <div className={Style.projectImage}>
                <img src={andImg1} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenter}>
                <p>
                    I built the application using the Flutter framework, focusing on directly accessing and displaying Android system information. The app leverages Flutter's built-in capabilities for UI rendering and state management to present details like battery status and system specifications. This approach allowed for a streamlined development process while fully utilizing Material 3 dynamic color for a modern and adaptive user interface.
                </p>
            </div>
            <div className={Style.projectImage}>
                <img src={andImg2} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenterSc}>
                <a href="https://github.com/alfahrelrifananda/Android-Info">Source Code</a>
            </div>
            <div className={Style.projectPrevAndNext}>
                <Link to="/project/belatarr" reloadDocument className={Style.link}>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrowL} />
                    <p>Prev</p>
                </Link>
                <Link to="/project/pospsikologi" reloadDocument className={Style.link}>
                    <p>Next</p>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                </Link>
            </div>
            <div className="tresholdContainer">
                <div className="tresholdBox"></div>
                <div className="tresholdLine"></div>
            </div >
            <Footer />
        </>
    )
}
export const PosPsikologi = () => {
    return (
        <>
            <div className={Style.introduction}>
                <div className={Style.introductionTitle}>
                    <h1>Pos Psikologi</h1>
                    <p>I developed Pos Psikologi, a dynamic website, for my aunt to serve as a minimalist platform for mental health consultations. The project aimed to provide a clean and intuitive user experience for those seeking psychological support. Built with HTML, CSS, and JavaScript, and powered by Firebase for dynamic content, the website features a vibrant yet minimalist design, utilizing a palette of orange, dark blue, green, and yellow to create a welcoming and calming atmosphere.
                    </p>
                </div>
                <div className={Style.introductionStatus}>
                    <div className={Style.introductionClient}>
                        <p>Client</p>
                        <i>Errisa Dwi Siswandani</i>
                    </div>
                    <div className={Style.introductionName}>
                        <p>Project</p>
                        <i>Pos Psikologi</i>
                    </div>
                    <div className={Style.introductionCurrent}>
                        <p>Status</p>
                        <i>Released</i>
                    </div>
                </div>
            </div>
            <div className={Style.projectImage}>
                <img src={posImg1} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectText}>
                <p>
                    I developed the dynamic front-end using HTML, CSS, and JavaScript, integrating with Firebase for backend functionality. The project focused on a minimalist design with specific color accents, ensuring a clean user experience. While leveraging established web technologies, the component structure and interaction flows were tailored to the consultation platform's unique needs, giving control over its behavior and responsiveness.
                </p>
            </div>
            <div className={Style.projectImage}>
                <img src={posImg2} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectImageFlex}>
                <img src={posImg4} alt="" loading="lazy" />
                <img src={posImg5} alt="" loading="lazy" />
            </div>
            <div className={Style.projectTextCenter}>
                <p>
                    The visual design for Pos Psikologi focused on creating a minimalist yet inviting atmosphere through its use of HTML and CSS. A specific color palette of orange, dark blue, green, and yellow was carefully chosen to balance vibrancy with a calming effect. These colors were strategically applied to maintain a clean and uncluttered interface, ensuring the website's aesthetic supports its function as a welcoming space for mental health consultations.
                </p>
            </div >
            <div className={Style.projectImage}>
                <img src={posImg3} alt="" style={{ width: "100%", height: "100%" }} loading="lazy" />
            </div>
            <div className={Style.projectTextCenterSc}>
                <a href="https://github.com/alfahrelrifananda/pos-psikologi">Source Code</a>
            </div>
            <div className={Style.projectPrevAndNext}>
                <Link to="/project/androidinfo" reloadDocument className={Style.link}>
                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrowL} />
                    <p>Prev</p>
                </Link>
                <Link to="#" reloadDocument className={Style.link}>

                </Link>
            </div>
            <div className="tresholdContainer">
                <div className="tresholdBox"></div>
                <div className="tresholdLine"></div>
            </div >
            <Footer />
        </>
    )
}