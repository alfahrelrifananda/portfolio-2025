import Style from "../../style/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

function Project() {
    return (
        <>
            <div className={Style.projectContainer}>
                <div className={Style.projectList}>
                    <a href="#">
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>01</p>
                            <h3>
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
                            </h3>
                            <div>
                                <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                            </div>
                        </div>

                    </a>
                    <a href="#">
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>02</p>
                            <h3>
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
                            </h3>
                            <div>
                                <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                            </div>
                        </div>

                    </a>
                    <a href="#">
                        <div className={Style.lines}>
                            <div className={Style.line}></div>
                            <div className={Style.lineChild}></div>
                        </div>
                        <div className={Style.li}>
                            <p>03</p>
                            <h3>
                                <span>
                                    <span>B</span>
                                    <span>E</span>
                                    <span>L</span>
                                    <span>A</span>
                                    <span> </span>
                                    <span>T</span>
                                    <span>A</span>
                                    <span>R</span>
                                    <span>'S</span>
                                    <span> </span>
                                    <span>B</span>
                                    <span>I</span>
                                    <span>O</span>
                                </span>
                            </h3>
                            <div>
                                <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                            </div>
                        </div>

                    </a>
                </div>
                <div className={Style.projectImage}>

                </div>
            </div>
        </>
    )
}

export default Project