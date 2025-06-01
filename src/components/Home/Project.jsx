import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Style from '../../style/Project.module.css';
import img1 from "../../assets/img_placeholder_cha.png"
import img2 from "../../assets/img_placeholder_todo.png"
import img3 from "../../assets/img_placeholder_bel.png"
import img4 from "../../assets/img_placeholder_and.png"
import img5 from "../../assets/img_placeholder_pos.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import ScrollVelocity from "../ReactBits/ScrollVelocity"

gsap.registerPlugin(ScrollTrigger);
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

    useEffect(() => {
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
            end: "+=400%", // 5 projects * 100vh each
            pin: true,
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
    // const handleContactClick = () => {
    //     console.log('Opening contact form...');
    // };
    // const handlePortfolioClick = () => {
    //     console.log('Navigating to portfolio...');
    // };
    return (
        <div>
            <section section ref={heroRef} className={Style.heroSection} id="projectContainer" >

            </section >
            <section section ref={pinnedRef} className={Style.pinnedSection} >
                <ScrollVelocity
                    texts={['', 'RECENT PROJECT -']}
                    className="custom-scroll-text"
                />
                <div className={Style.container}>
                    <div className={Style.grid}>

                        <div className={Style.menuColumn}>
                            <div className={Style.menuItems}>
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`${Style.menuItem} ${activeIndex === index ? Style.menuItemActive : ''}`}
                                    >
                                        <div className={`${Style.menuIndicator} ${activeIndex === index ? Style.menuIndicatorActive : ''}`}></div>
                                        <div className={`${Style.menuContent} ${activeIndex === index ? Style.menuContentActive : ''}`}>
                                            <div className={`${Style.projectLi} ${activeIndex === index ? Style.projectLiActive : ''}`}>
                                                <div className={Style.lines}>
                                                    <div className={`${Style.line} ${activeIndex === index ? Style.lineActive : ''}`}></div>
                                                    <div className={Style.lineChild}></div>
                                                </div>
                                                <div className={Style.li}>
                                                    <p>{project.number}</p>
                                                    <div className={Style.liT}>
                                                        <h2>
                                                            <span>
                                                                {project.title}
                                                            </span>
                                                        </h2>
                                                        <i>{project.description}</i>
                                                        <div>
                                                            <FontAwesomeIcon icon={faArrowUp} className={Style.arrow} />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>




                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={Style.imageColumn}>
                            <div className={Style.imageContainer}>
                                {projects.map((project, index) => (
                                    <div
                                        key={index}
                                        className={`${Style.projectImage} ${activeIndex === index ? Style.projectImageActive : ''}`}
                                    >
                                        <div className={Style.rippleContainer}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section section ref={closingRef} className={Style.closingSection} >
            </section >
        </div >
    );
}

export default Project