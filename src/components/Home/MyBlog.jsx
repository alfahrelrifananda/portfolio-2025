import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "../../style/MyBlog.css";

gsap.registerPlugin(ScrollTrigger);

function MyBlog() {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
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
        <div className="App" ref={component}>
            <div className="firstContainer"></div>
            <div ref={slider} className="container">
                <div className="panel">
                    <div className="blog-card">
                        <div className="blog-featured">
                        </div>
                        <p className="blog-date">12 march, 2025</p>
                        <p className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
                    </div>
                </div>
                <div className="panel">
                    <div className="blog-card">
                        <div className="blog-featured">

                        </div>
                        <p className="blog-date">12 march, 2025</p>
                        <p className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="blog-card">
                        <div className="blog-featured">
                        </div>
                        <p className="blog-date">12 march, 2025</p>
                        <p className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="blog-card">
                        <div className="blog-featured">
                        </div>
                        <p className="blog-date">12 march, 2025</p>
                        <p className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
                    </div>
                </div>

                <div className="panel">
                    <div className="blog-card">
                        <div className="blog-featured">
                        </div>
                        <p className="blog-date">12 march, 2025</p>
                        <p className="blog-title">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <p className="blog-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, temporibus enim. Sint, possimus officia repellat ducimus dolorum consequuntur totam hic!</p>
                    </div>
                </div>


            </div>
            <div className="lastContainer"></div>
        </div>
    );
}

export default MyBlog
