import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import styles from '../../style/HomeModule/Project.module.css';
import img1 from "../../assets/img_placeholder_cha.png"
import img2 from "../../assets/img_placeholder_todo.png"
import img3 from "../../assets/img_placeholder_bel.png"
import img4 from "../../assets/img_placeholder_and.png"
import img5 from "../../assets/img_placeholder_pos.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import ScrollVelocity from "../ReactBits/ScrollVelocity"

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
    const baseUrl = "portfolio-2025"

    // const handleMenuHover = (index) => {
    //     if (scrollTriggerRef.current) {
    //         const targetProgress = index / (projects.length - 1);
    //         const scrollStart = scrollTriggerRef.current.start;
    //         const scrollEnd = scrollTriggerRef.current.end;
    //         const totalScrollDistance = scrollEnd - scrollStart;
    //         const targetScroll = scrollStart + (totalScrollDistance * targetProgress);

    //         gsap.to(window, {
    //             duration: 1.2,
    //             scrollTo: { y: targetScroll, autoKill: false },
    //             ease: "power2.inOut"
    //         });
    //     }
    // };

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
    function handleClick(i) {
        if (i === 0) {
            window.location = `${baseUrl}/project/chameleon/`
        } else if (i === 1) {
            window.location = `${baseUrl}/project/todo/`
        } else if (i === 2) {
            window.location = `${baseUrl}/project/belatarr/`
        } else if (i === 3) {
            window.location = `${baseUrl}/project/androidinfo/`
        } else if (i === 4) {
            window.location = `${baseUrl}/project/pospsikologi/`
        }
    };

    return (
        <div>
            <section ref={heroRef} className={styles.heroSection} id="projectContainer" >

            </section >
            <section ref={pinnedRef} className={styles.pinnedSection} >
                <ScrollVelocity
                    texts={['', 'RECENT PROJECT -']}
                    className="custom-scroll-text"
                />
                <div className={styles.container}>
                    <div className={styles.grid}>

                        <div className={styles.menuColumn}>
                            <div className={styles.menuItems}>
                                {projects.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.menuItem} ${activeIndex === index ? styles.menuItemActive : ''}`}
                                        // onMouseEnter={() => handleMenuHover(index)}
                                        onClick={() => handleClick(index)}
                                    >
                                        <div className={`${styles.menuIndicator} ${activeIndex === index ? styles.menuIndicatorActive : ''}`}></div>
                                        <div className={`${styles.menuContent} ${activeIndex === index ? styles.menuContentActive : ''}`}>
                                            <div className={`${styles.projectLi} ${activeIndex === index ? styles.projectLiActive : ''}`}>
                                                <div className={styles.lines}>
                                                    <div className={`${styles.line} ${activeIndex === index ? styles.lineActive : ''}`}></div>
                                                    <div className={styles.lineChild}></div>
                                                </div>
                                                <div className={styles.li}>
                                                    <p>{service.number}</p>
                                                    <div className={styles.liT}>
                                                        <h2>
                                                            <span>
                                                                {service.title}
                                                            </span>
                                                        </h2>
                                                        <i>{service.description}</i>
                                                        <div>
                                                            <FontAwesomeIcon icon={faArrowUp} className={styles.arrow} />
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>




                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles.imageColumn}>
                            <div className={styles.imageContainer}>
                                {projects.map((service, index) => (
                                    <div
                                        key={index}
                                        className={`${styles.serviceImage} ${activeIndex === index ? styles.serviceImageActive : ''}`}
                                    >
                                        <div className={styles.rippleContainer}>
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section >
            <section ref={closingRef} className={styles.closingSection} >
            </section >
        </div >
    );
}

export default Project

