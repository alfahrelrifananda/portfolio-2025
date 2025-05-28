import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import Style from "../../style/Home.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import CardBlog from "./CardBlog";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function MyBlog() {

    const component = useRef()
    const slider = useRef()


    useGSAP(
        () => {
            let ctx = gsap.context(() => {
                let panels = gsap.utils.toArray("#blogContainer span")
                gsap.to(panels, {
                    xPercent: -100 * (panels.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: slider.current,
                        pin: true,
                        scrub: 1,
                        pinSpacer: false,
                        snap: 1 / (panels.length - 1),
                        end: () => "+=" + slider.current.offsetWidth,
                    }
                })
            }, [component])
            return () => ctx.revert();
        },
        { scope: component }
    );

    return (
        <div className={Style.blogBigContainer} ref={component}>
            <div className={Style.blogContainer} id="blogContainer" ref={slider}>
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
