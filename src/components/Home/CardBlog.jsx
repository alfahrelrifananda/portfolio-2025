import Style from "../../style/HomeModule/CardBlog.module.css"
import { useRef, useCallback } from "react"
import ProfilePlaceholder from "../../assets/profile.jpg"
function CardBlog(props) {
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
                <div className={Style.blogCardDay}>{props.day}</div>
                <div className={Style.blogCardNewLabel}>
                    New
                    <span></span>
                </div>
            </div>
            <div className={Style.blogCardDate}>{props.date}</div>
            <div className={Style.blogCardFeatImg}>
                <img src={props.FeatImg} alt="" />
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
                        <div className={Style.blogCardHour}>{props.hour}</div>
                        <span></span>
                        <div className={Style.blogCardMinuteRead}>{props.minutenRead}</div>
                        <span></span>
                        <div className={Style.blogCardCat}>{props.category}</div>
                    </div>
                </div>
                <div className={Style.blogCardAuthorCol2}>
                    <div className={Style.blogCardShare}>
                    </div>
                </div>
            </div>
            <div className={Style.blogCardTitle}>
                {props.title}
            </div>
            <div className={Style.blogCardDesc}>
                {props.desc}
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