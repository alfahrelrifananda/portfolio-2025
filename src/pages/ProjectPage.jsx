import React, { lazy } from "react";
import Style from "../style/ProjectModule/Project.module.css"
import ScrollToTop from "../ScrollToTop"
// import chaImg from "../assets/img_placeholder_cha.png"
// import todoImg from "../assets/img_placeholder_todo.png"
// import belImg from "../assets/img_placeholder_bel.png"
// import andImg from "../assets/img_placeholder_and.png"
// import posImg from "../assets/img_placeholder_pos.png"
const Footer = lazy(() => import("../components/Footer"));
export const Chameleon = () => {
    return (
        <>
            <ScrollToTop />
            <h1 className={Style.title}>CHAMELEON</h1>
            <Footer />

        </>
    )
}
export const Todo = () => {
    return (
        <>
            <ScrollToTop />
            <h1 className={Style.title}>TODO</h1>
            <Footer />

        </>
    )
}
export const BelaTarr = () => {
    return (
        <>
            <ScrollToTop />
            <h1 className={Style.title}>BELATARR</h1>
            <Footer />

        </>
    )
}
export const AndroidInfo = () => {
    return (
        <>
            <ScrollToTop />
            <h1 className={Style.title}>ANDROIDINFO</h1>
            <Footer />

        </>
    )
}
export const PosPsikologi = () => {
    return (
        <>
            <ScrollToTop />
            <h1 className={Style.title}>POSPSIKOLOGI</h1>
            <Footer />
        </>
    )
}