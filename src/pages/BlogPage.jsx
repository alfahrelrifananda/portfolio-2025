import React, {lazy} from "react"
import Jumbotron from "../components/Blog/Jumbotron"
import ScrollToTop from "../ScrollToTop"

const Footer = lazy(() => import("../components/Footer"));

function BlogPage() {
    return (
        <>
            <ScrollToTop />
            <Jumbotron />
            <Footer/>
        </>
    )
}
export default BlogPage