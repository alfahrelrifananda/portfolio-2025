import React, { lazy } from "react";
import { Link } from "react-router-dom";
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

// import belImg from "../assets/img_placeholder_bel.png"
// import andImg from "../assets/img_placeholder_and.png"
// import posImg from "../assets/img_placeholder_pos.png"
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
                    For Todo, I developed the application using the Flutter framework, focusing on a streamlined approach for a simple to-do list. The core functionality, including task management, categorization, and basic navigation, was implemented using Flutter's native capabilities. This allowed for efficient development and ensured a consistent user experience, adhering to the principles of Material 3 for a clean and modern interface.
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
export const BelaTarr = () => {
    return (
        <>
            <h1 className={Style.title}>BELATARR</h1>

        </>
    )
}
export const AndroidInfo = () => {
    return (
        <>
            <h1 className={Style.title}>ANDROIDINFO</h1>

        </>
    )
}
export const PosPsikologi = () => {
    return (
        <>
            <h1 className={Style.title}>POSPSIKOLOGI</h1>
        </>
    )
}