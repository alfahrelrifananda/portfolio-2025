import { useLayoutEffect, useRef, useState, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import Style from '../../style/HomeModule/Project.module.css';
import img1 from "../../assets/img_placeholder_cha.png"
import img2 from "../../assets/img_placeholder_todo.png"
import img3 from "../../assets/img_placeholder_bel.png"
import img4 from "../../assets/img_placeholder_and.png"
import img5 from "../../assets/img_placeholder_pos.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
const ScrollVelocity = lazy(() => import("../ReactBits/ScrollVelocity"))
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const projects = [
    {
        number: 1,
        title: "CHAMELEON",
        description: "Gallery App",
        image: img1
    },
    {
        number: 2,
        title: "TODO",
        description: "To-do List App",
        image: img2
    },
    {
        number: 3,
        title: "BELA TAR",
        description: "Biography Website",
        image: img3
    },
    {
        number: 4,
        title: "ANDROID INFO",
        description: "System info App",
        image: img4
    },
    {
        number: 5,
        title: "POS PSIKOLOGI",
        description: "Consultate Website",
        image: img5
    }
];
function Project() {
    const heroRef = useRef(null);
    const pinnedRef = useRef(null);
    const closingRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollTriggerRef = useRef(null);
    useLayoutEffect(() => {
        let currentIndex = 0;
        const heroElements = heroRef.current.querySelectorAll('[data-animation="fadeInUp"]');
        heroElements.forEach((element, index) => {
            const delay = index * 0.3;
            gsap.set(element, { y: 50, opacity: 0 });
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: delay,
                ease: "power3.out"
            });
        });
        const scrollTrigger = ScrollTrigger.create({
            trigger: pinnedRef.current,
            start: "top top",
            end: "+=2000",
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            scrub: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const newIndex = Math.floor(progress * projects.length);
                const clampedIndex = Math.min(newIndex, projects.length - 1);
                if (clampedIndex !== currentIndex) {
                    currentIndex = clampedIndex;
                    setActiveIndex(clampedIndex);
                }
            }
        });
        scrollTriggerRef.current = scrollTrigger;
        const closingElements = closingRef.current.querySelectorAll('[data-animation="fadeInUp"]');
        closingElements.forEach((element, index) => {
            const delay = index * 0.3;
            gsap.set(element, { y: 50, opacity: 0 });
            gsap.to(element, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: closingRef.current,
                    start: "top 70%",
                }
            });
        });
        return () => {
            scrollTrigger.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    return (
        <div>
            <section ref={heroRef} className={Style.heroSection} id="projectContainer" >
            </section >
            <section ref={pinnedRef} className={Style.pinnedSection} >
                <ScrollVelocity
                    texts={['', 'RECENT PROJECT -']}
                    className="custom-scroll-text"
                />
                <div className={Style.container}>
                    <div className={Style.grid}>
                        <div className={Style.menuColumn}>
                            <div className={Style.menuItems}>
                                {projects.map((service, index) => (
                                    <Link
                                        replace
                                        reloadDocument
                                        to={
                                            index === 0 ? "project/chameleon" :
                                                (index === 1 ? "/project/todo" :
                                                    (index === 2 ? "project/belatarr" :
                                                        (index === 3 ? "project/todo" :
                                                            (index === 4 ? "project/pospsikologi" : ""))))
                                        }
                                        key={index}
                                        className={`${Style.menuItem} ${activeIndex === index ? Style.menuItemActive : ''}`}
                                    // onClick={() => handleClick(index)}
                                    >
                                        <div className={`${Style.menuIndicator} ${activeIndex === index ? Style.menuIndicatorActive : ''}`}></div>
                                        <div className={`${Style.menuContent} ${activeIndex === index ? Style.menuContentActive : ''}`}>
                                            <div className={`${Style.projectLi} ${activeIndex === index ? Style.projectLiActive : ''}`}>
                                                <div className={Style.lines}>
                                                    <div className={`${Style.line} ${activeIndex === index ? Style.lineActive : ''}`}></div>
                                                    <div className={Style.lineChild}></div>
                                                </div>
                                                <div className={Style.li}>
                                                    <p>{service.number}</p>
                                                    <div className={Style.liT}>
                                                        <h2>
                                                            <span>
                                                                {service.title}
                                                            </span>
                                                        </h2>
                                                        <i>{service.description}</i>
                                                        <div className={Style.arrow}>
                                                            <FontAwesomeIcon icon={faArrowUp} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={Style.imageColumn}>
                            <div className={Style.imageContainer}>
                                {projects.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`${Style.serviceImage} ${activeIndex === index ? Style.serviceImageActive : ''}`}
                                    >
                                        <div className={Style.rippleContainer}>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading='lazy'
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section ref={closingRef} className={Style.closingSection} >
            </section >
        </div >
    );
}
export default Project