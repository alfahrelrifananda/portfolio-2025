import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Style from "../../style/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import CardBlog from "./CardBlog";

gsap.registerPlugin(ScrollTrigger);

function MyBlog() {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray("#blogContainer span");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 0 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                }
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div className={Style.App} ref={component}>
            <div ref={slider} className={Style.blogContainer} id="blogContainer">
                <span className={Style.blogPanel}></span>
                <span className={Style.blogPanel}>
                    <CardBlog />
                </span>
                <span className={Style.blogPanel}>
                    <CardBlog />
                </span>
                <span className={Style.blogPanel}>
                    <CardBlog />
                </span>
                <span className={Style.blogPanel}>
                    <CardBlog />
                </span>
                <span className={Style.blogPanel}>
                    <CardBlog />
                </span>
                <span className={Style.blogPanel}>
                    <a href="" className={Style.blogMoreBlog}>
                        <FontAwesomeIcon icon={faArrowUp} className={Style.blogMoreBlogArrow} />
                    </a>
                </span>

            </div>
        </div>
    );
}

export default MyBlog
