import React, { lazy } from "react";
const Jumbotron = lazy(() => import("../components/Blog/Jumbotron"));
const Content = lazy(() => import("../components/Blog/Content"));
const Footer = lazy(() => import("../components/Footer"));

function BlogPage() {
    return (
        <>
            <main>
                <Jumbotron />
                <Content />
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