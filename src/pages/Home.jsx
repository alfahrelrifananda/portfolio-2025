import React from "react"
import { useState, useEffect } from "react"
import Greeting from "../components/Home/Greeting"
import About from "../components/Home/About"
import AboutMore from "../components/Home/AboutMore"
import MyBlog from "../components/Home/MyBlog"
import Contact from "../components/Home/Contact"
import Project from "../components/Home/Project"
import LoadingPage from "./LoadingPage"


function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);
    return (
        <>
            {loading ? (<LoadingPage />) :
                (
                    <main>
                        <Greeting />
                        <div id="aboutTreshold"></div>
                        <About />
                        <AboutMore />
                        <div id="projectTreshold">
                            <div className="box-separator"></div>
                            <div className="line-separator"></div>
                        </div>
                        <Project />
                        <div id="blogTreshold"></div>
                        <MyBlog />
                        <div id="contactTreshold"></div>
                        <Contact />
                    </main>
                )
            }


        </>
    )
}

export default Home