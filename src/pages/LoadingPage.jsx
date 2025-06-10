import { useLayoutEffect } from "react"
import Style from "../style/HomeModule/Loading.module.css"
import gsap from "gsap"
import SplitText from "gsap/dist/SplitText"
function LoadingPage() {
    useLayoutEffect(() => {
        gsap.registerPlugin(SplitText);
        document.fonts.ready.then(() => {
            gsap.set("#loadingPage h1", { opacity: 1 });
            let split;
            SplitText.create("#loadingPage h1", {
                type: "words,lines",
                linesClass: "line",
                autoSplit: true,
                mask: "lines",
                onSplit: (self) => {
                    split = gsap.from(self.lines, {
                        duration: 1.0,
                        yPercent: 100,
                        opacity: 0,
                        stagger: 0.1,
                        ease: "expo.out",
                    });
                    return split;
                }
            });
        });
    })
    return (
        <div className={Style.loadingclass} id="loadingPage">
            <h1>LOADING</h1>
            <h1>LOADING</h1>
            <h1>LOADING</h1>
        </div>
    )
}
export default LoadingPage