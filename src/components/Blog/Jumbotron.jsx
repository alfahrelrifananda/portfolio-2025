import Style from "../../style/BlogModule/Jumbotron.module.css"

function Jumbotron() {
    return (
        <>
            <div className={Style.jumbotron}>
                <div className={Style.introduction}>
                    <div className={Style.introductionTitle}>
                        <h1>Blogs</h1>
                        <p>Hey there! This is my personal blog where I share all sorts of things that capture my interest and imagination. You'll find a mix of everything here, from the apps and websites I've been building and my adventures in the world of tech to my thoughts on movies, books, and even daily life observations. Think of it as a creative space where I put all my passions on display. Take a look around and enjoy exploring!
                        </p>
                    </div>
                    <div className={Style.introductionCategory}>
                        <div className={Style.introductionCat}>
                            <p>Category</p>
                            <i>
                                <a href="">all</a> |
                                <a href="">backend</a> |
                                <a href="">frontend</a> |
                                <a href="">books</a> |
                                <a href="">tech</a> |
                                <a href="">politics</a> |
                                <a href="">social</a> |
                                <a href="">philosophy</a> |
                                <a href="">movies</a> |
                                <a href="">update</a>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="tresholdContainer">
                    <div className="tresholdLine"></div>
                    <div className="tresholdBox"></div>
                </div >
            </div>
        </>
    )
}
export default Jumbotron