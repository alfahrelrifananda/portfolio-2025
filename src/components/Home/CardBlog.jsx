import Style from "../../style/HomeModule/CardBlog.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { useRef, useCallback } from "react"
import BlogPlaceholder from "../../assets/img_placeholder_1.jpg"
import ProfilePlaceholder from "../../assets/profile.jpg"

function CardBlog() {

    function ReadAll() {
        alert("Under Construction")
    }

    const buttonRef = useRef(null)

    const handleMouseEnter = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return

        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top

        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])

    const handleMouseLeave = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return

        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top

        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])
    return (
        <div className={Style.blogCard}>
            <div className={Style.blogCardTop}>
                <div className={Style.blogCardDay}>Wednesday</div>
                <div className={Style.blogCardNewLabel}>
                    New
                    <span></span>
                </div>
            </div>
            <div className={Style.blogCardDate}>June 4, 2025</div>
            <div className={Style.blogCardFeatImg}>
                <img src={BlogPlaceholder} alt="" />
            </div>
            <div className={Style.blogCardAuthor}>
                <div className={Style.blogCardAuthorCol1}>
                    <div className={Style.blogCardProfile}>
                        <div className={Style.blogCardPic}>
                            <img src={ProfilePlaceholder} alt="" />
                        </div>
                        <div className={Style.blogCardName}>Fahrel</div>
                    </div>
                    <div className={Style.blogCardCategory}>
                        <div className={Style.blogCardHour}>01.30 PM</div>
                        <span></span>
                        <div className={Style.blogCardMinuteRead}>12 min read</div>
                        <span></span>
                        <div className={Style.blogCardCat}>Tech</div>
                    </div>
                </div>
                <div className={Style.blogCardAuthorCol2}>
                    <div className={Style.blogCardShare}>
                        <FontAwesomeIcon icon={faShare} />
                    </div>
                </div>
            </div>
            <div className={Style.blogCardTitle}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error tenetur qui saepe, placeat modi possimus?
            </div>
            <div className={Style.blogCardDesc}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id mollitia, illo eligendi harum est dolore eos officia odio, quasi veritatis voluptate. Non voluptatum magnam delectus animi consequatur explicabo, deserunt quos! Voluptas eaque praesentium illo consequuntur, veritatis quod facilis, sequi ea rem optio modi quam vitae ipsa quisquam quasi quia vel magnam iure magni. Sapiente eius maxime ipsum voluptates consectetur commodi?
            </div>
            <button
                type="submit" onClick={() => { ReadAll() }}
                ref={buttonRef}
                className={Style.btnReadAll}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <span className={Style.hoverEffect}></span>
                <span className={Style.buttonText}>Read All</span>
            </button>
        </div>
    )
}

export default CardBlog