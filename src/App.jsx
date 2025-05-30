import React, { useState, createContext, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Header"
import Style from "./style/Header.module.css"
import Home from "./pages/Home"
import "./style/index.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import Footer from "./components/Footer"

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {

  const main = useRef();
  const smoother = useRef();
  const [isDarkMode, setIsDarkMode] = useState(true)

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 2,
        smoothTouch: true,
        ignoreMobileResize: true,
        normalizeScroll: true,
      });


    },


    { scope: main }
  );

  if (isDarkMode) {
    document.documentElement.style.setProperty('--primary-dark', '#F6F4F2')
    document.documentElement.style.setProperty('--primary-light', '#1C0F13')
  } else {
    document.documentElement.style.setProperty('--primary-dark', '#1C0F13')
    document.documentElement.style.setProperty('--primary-light', '#F6F4F2')
  }

  function toggleTheme() {
    if (isDarkMode) {
      setIsDarkMode(false)
      document.documentElement.style.setProperty('--primary-dark', '#1C0F13')
      document.documentElement.style.setProperty('--primary-light', '#F6F4F2')
    } else {
      setIsDarkMode(true)
      document.documentElement.style.setProperty('--primary-dark', '#F6F4F2')
      document.documentElement.style.setProperty('--primary-light', '#1C0F13')
    }
  }

  return (
    <ThemeContext.Provider value={isDarkMode}>

      <Header />
      <div className="bg-strip">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="smooth-wrapper" ref={main} >
        <div id="smooth-content">
          <Home />
          <Footer />
        </div>

      </div >
      <div className={Style.BottomHeaderContainer}>
        <button onClick={toggleTheme}>
          {isDarkMode ?
            <FontAwesomeIcon icon={faSun} className={Style.arrow} />
            :
            <FontAwesomeIcon icon={faMoon} className={Style.arrow} />
          }
        </button>
      </div>
    </ThemeContext.Provider>

  )
}

export default App
