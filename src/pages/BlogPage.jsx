import React, { lazy } from "react";
import Jumbotron from "../components/Blog/Jumbotron"
import Style from "../style/BlogModule/Blog.module.css"
const Footer = lazy(() => import("../components/Footer"));


function BlogPage() {
    return (
        <>
            <main className={Style.mainContainer}>
                <Jumbotron />
                <div className="tresholdContainer">
                    <div className="tresholdBox"></div>
                    <div className="tresholdLine"></div>
                </div >
                <Footer />
            </main>
        </>
    )
}
export default BlogPage