
import React from "react"
import Greeting from "../components/Home/Greeting"
import ScrollVelocity from "../components/ReactBits/ScrollVelocity"
import About from "../components/Home/About"
import Project from "../components/Home/Project"
import MyBlog from "../components/Home/MyBlog"
import Contact from "../components/Home/Contact"

function Home() {




    return (
        <>
            <Greeting />
            <ScrollVelocity
                texts={['ABOUT ME -']}
                className="custom-scroll-text"
            />
            <About />
            <ScrollVelocity
                texts={['', 'RECENT PROJECT -']}
                className="custom-scroll-text"
            />
            <Project />
            <MyBlog />
            <Contact />

        </>
    )
}

export default Home