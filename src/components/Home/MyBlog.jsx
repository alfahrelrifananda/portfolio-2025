import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Style from "../../style/MyBlog.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import CardBlog from "./CardBlog";

gsap.registerPlugin(ScrollTrigger);

function MyBlog() {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray("#myblog-container span");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    // snap: 0 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className={Style.App} ref={component}>
            <div ref={slider} className={Style.container} id="myblog-container">
                <span className={Style.panel}></span>
                <span className={Style.panel}>
                    <CardBlog />
                </span>
                <span className={Style.panel}>
                    <CardBlog />
                </span>
                <span className={Style.panel}>
                    <CardBlog />
                </span>
                <span className={Style.panel}>
                    <CardBlog />
                </span>
                <span className={Style.panel}>
                    <CardBlog />
                </span>
                <span className={Style.panel}>
                    <a href="" className={Style.moreBlog}>
                        <FontAwesomeIcon icon={faArrowUp} className={Style.moreBlogArrow} />
                    </a>
                </span>

            </div>
        </div>
    );
}

export default MyBlog
