import React from "react"
import { useState, useEffect, lazy } from "react"

const Greeting = lazy(() => import("../components/Home/Greeting"));
const About = lazy(() => import("../components/Home/About"));
const AboutMore = lazy(() => import("../components/Home/AboutMore"));
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
                        <Greeting />
                        <div id="aboutTreshold"></div>
                        <About />
                        <AboutMore />
                        <div id="projectTreshold"></div>
                        <Project />
                    </main>
                )
            }


        </>
    )
}

export default Home