import Style from "../../style/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import img1 from "../../assets/img_placeholder_1.jpg"
import img3 from "../../assets/img_placeholder_3.png"

function Project() {

    function pHandleMouseEnter(pNumber) {
        let pFeatured = document.getElementById("dds")
        console.log(pFeatured)
        console.log(pNumber)
        if (pNumber === 1) {
            pFeatured.style.backgroundImage = `url(${img1})`
        } else if (pNumber === 2) {
            pFeatured.style.backgroundImage = `url(${img1})`
        } else {
            pFeatured.style.backgroundImage = `url(${img3})`
        }
    }


    return (
        <>
            <div className={Style.projectContainer} id="projectContainer">
                <div className={Style.projectList} id="project-list-card">
                    <div className={Style.projectLi} onMouseEnter={() => pHandleMouseEnter(1)}>
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>01</p>
                            <div className={Style.liT}>
                                <h2>
                                    <span>
                                        <span>C</span>
                                        <span>H</span>
                                        <span>A</span>
                                        <span>M</span>
                                        <span>E</span>
                                        <span>L</span>
                                        <span>E</span>
                                        <span>O</span>
                                        <span>N</span>
                                        <span> </span>
                                        <span>A</span>
                                        <span>P</span>
                                        <span>P</span>
                                    </span>
                                </h2>
                                <i>GALLERY APP</i>
                                <div>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={Style.projectLi} onMouseEnter={() => pHandleMouseEnter(3)}>
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>02</p>
                            <div className={Style.liT}>
                                <h2>
                                    <span>
                                        <span>T</span>
                                        <span>O</span>
                                        <span>D</span>
                                        <span>O</span>
                                    </span>
                                </h2>
                                <i>TO-DO LIST APP</i>
                                <div>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={Style.projectLi} onMouseEnter={() => pHandleMouseEnter(3)}>
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>03</p>
                            <div className={Style.liT}>
                                <h2>
                                    <span>
                                        <span>B</span>
                                        <span>E</span>
                                        <span>L</span>
                                        <span>A</span>
                                        <span> </span>
                                        <span>T</span>
                                        <span>A</span>
                                        <span>R</span>
                                    </span>
                                </h2>
                                <i>BIOGRAPHY WEBSITE</i>
                                <div>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={Style.projectLi} onMouseEnter={() => pHandleMouseEnter(3)}>
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>04</p>
                            <div className={Style.liT}>
                                <h2>
                                    <span>
                                        <span>A</span>
                                        <span>N</span>
                                        <span>D</span>
                                        <span>R</span>
                                        <span>O</span>
                                        <span>I</span>
                                        <span>D</span>
                                        <span> </span>
                                        <span>I</span>
                                        <span>N</span>
                                        <span>F</span>
                                        <span>O</span>
                                    </span>
                                </h2>
                                <i>SYSTEM INFO APP</i>
                                <div>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={Style.projectLi} onMouseEnter={() => pHandleMouseEnter(2)}>
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>05</p>
                            <div className={Style.liT}>
                                <h2>
                                    <span>
                                        <span>P</span>
                                        <span>O</span>
                                        <span>S</span>
                                        <span> </span>
                                        <span>P</span>
                                        <span>S</span>
                                        <span>I</span>
                                        <span>K</span>
                                        <span>O</span>
                                        <span>L</span>
                                        <span>O</span>
                                        <span>G</span>
                                        <span>I</span>
                                    </span>
                                </h2>
                                <i>CONSULTATE WEBSITE</i>
                                <div>
                                    <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className={Style.projectImage} id="dds">
                </div>
            </div>
        </>
    )
}

export default Project