import React from "react"
import Greeting from "../components/Home/Greeting"
import About from "../components/Home/About"
import AboutMore from "../components/Home/AboutMore"
import MyBlog from "../components/Home/MyBlog"
import Contact from "../components/Home/Contact"

function Home() {




    return (
        <>
            <Greeting />
            <About />
            <AboutMore />
            <div id="blogTreshold"></div>
            <MyBlog />
            <Contact />

        </>
    )
}

export default Home