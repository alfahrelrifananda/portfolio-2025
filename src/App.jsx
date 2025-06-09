import React, { useState, createContext, useRef, lazy } from "react"
import Style from "./style/ComponentsModule/Header.module.css"
import "./style/index.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Chameleon, Todo, BelaTarr, AndroidInfo, PosPsikologi } from "./pages/ProjectPage"

const Home = lazy(() => import("./pages/Home"));

const BlogPage = lazy(() => import("./pages/BlogPage"));


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
        smooth: 0.5,
        smoothTouch: 0.1,
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
      <BrowserRouter basename="/portfolio-2025">
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
            <Routes>
              <Route index element={<Home />} />
              <Route path='blog' element={<BlogPage />} />
              <Route path='project' >
                <Route path='chameleon' element={<Chameleon />} />
                <Route path='todo' element={<Todo />} />
                <Route path='belatarr' element={<BelaTarr />} />
                <Route path='androidinfo' element={<AndroidInfo />} />
                <Route path='pospsikologi' element={<PosPsikologi />} />
              </Route>
            </Routes>
          </div>
        </div >
        <div className={Style.BottomHeaderContainer}>
          <button onClick={toggleTheme}>
            D
          </button>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}
export default App
