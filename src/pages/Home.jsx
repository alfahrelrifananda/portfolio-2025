import React from "react"
import { useState, useEffect, lazy } from "react"

const Footer = lazy(() => import("../components/Footer"));
const Greeting = lazy(() => import("../components/Home/Greeting"));
const About = lazy(() => import("../components/Home/About"));
const AboutMore = lazy(() => import("../components/Home/AboutMore"));
const MyBlog = lazy(() => import("../components/Home/MyBlog"));
const MyBlogMobile = lazy(() => import("../components/Home/MyBlogMobile"));
const Contact = lazy(() => import("../components/Home/Contact"));
const Project = lazy(() => import("../components/Home/Project"));
const LoadingPage = lazy(() => import("../pages/LoadingPage"));

function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2300);

    }, []);
    return (
        <>
            {loading ? (<LoadingPage />) :
                (
                    <main>
                        {/* <Header /> */}
                        <Greeting />
                        <div id="aboutTreshold"></div>
                        <About />
                        <AboutMore />
                        <div id="projectTreshold"></div>
                        <Project />
                        {/* <div id="blogTreshold" className="tresholdContainer">
                            <div className="tresholdLine"></div>
                            <div className="tresholdBox"></div>
                        </div>
                        {window.innerWidth < 1000 ?
                            <MyBlogMobile />
                            :
                            <MyBlog />
                        } */}
                        <div id="contactTreshold"></div>
                        <Contact />
                        <div id="footerTreshold" className="tresholdContainer">
                            <div className="tresholdBox"></div>
                            <div className="tresholdLine"></div>
                        </div>
                        <Footer />
                    </main>
                )
            }


        </>
    )
}

export default Home