import Jumbotron from "../components/Blog/Jumbotron"
import Footer from "../components/Footer"
import Style from "../style/BlogModule/Blog.module.css"

function BlogPage() {
    return (
        <>
            <main className={Style.mainContainer}>
                <Jumbotron />
            </main>
        </>
    )
}
export default BlogPage