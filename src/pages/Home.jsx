
import React from "react"
import Greeting from "../components/Home/Greeting"
import ScrollVelocity from "../components/ReactBits/ScrollVelocity"
import About from "../components/Home/About"
import AboutMore from "../components/Home/AboutMore"
import Project from "../components/Home/Project"
import MyBlog from "../components/Home/MyBlog"
import Contact from "../components/Home/Contact"
import BlobCursor from "../components/ReactBits/BlobCursor"


function Home() {




    return (
        <>
            <BlobCursor
                blobType="circle"
                fillColor="#00f0ff"
                trailCount={3}
                sizes={[60, 125, 75]}
                innerSizes={[20, 35, 25]}
                innerColor="rgba(255,255,255,0.8)"
                opacities={[0.6, 0.6, 0.6]}
                shadowColor="rgba(0,0,0,0.75)"
                shadowBlur={5}
                shadowOffsetX={10}
                shadowOffsetY={10}
                filterStdDeviation={30}
                useFilter={true}
                fastDuration={0.1}
                slowDuration={0.5}
                zIndex={100}
            />
            <Greeting />
            <ScrollVelocity
                texts={['ABOUT ME -']}
                className="custom-scroll-text"
            />
            <About />
            <AboutMore/>
            <div id="blogTreshold"></div>
            <MyBlog />
            <Contact />

        </>
    )
}

export default Home