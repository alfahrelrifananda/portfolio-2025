import React, { useState, createContext, useRef, lazy } from "react"
import Style from "./style/ComponentsModule/Header.module.css"
import "./style/index.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollSmoother from "gsap/ScrollSmoother"
import { useGSAP } from "@gsap/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"
import { Route, Routes, useLocation } from 'react-router-dom'
import { Chameleon, Todo, BelaTarr, AndroidInfo, PosPsikologi } from "./pages/ProjectPage"
import { useEffect } from "react"
import Dashboard from "./auth/Dashboard"
import Login from "./auth/Login"

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header"));
const BlogPage = lazy(() => import("./pages/BlogPage"));

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext()
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);
function App() {
  const main = useRef();
  const smoother = useRef();
  const history = useLocation();
  const [userTheme, setUserTheme] = useState(() => {
    const savedTheme = localStorage.getItem('userTheme')
    if (savedTheme === null) {
      return 'light'
    } else {
      return savedTheme
    }
  })
  const [isLoading, setIsLoading] = useState(true)
  const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL
  const loginUrl = import.meta.env.VITE_LOGIN_URL

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        smooth: 3,
        smoothTouch: 0.1,
      });
    },
    { scope: main }
  );
  if (userTheme === 'dark') {
    document.documentElement.style.setProperty('--primary-dark', '#F6F4F2')
    document.documentElement.style.setProperty('--primary-light', '#1C0F13')
  } else {
    document.documentElement.style.setProperty('--primary-dark', '#1C0F13')
    document.documentElement.style.setProperty('--primary-light', '#F6F4F2')
  }
  function toggleTheme() {
    if (userTheme === 'light') {
      setUserTheme('dark')
      document.documentElement.style.setProperty('--primary-dark', '#F6F4F2')
      document.documentElement.style.setProperty('--primary-light', '#1C0F13')
    }
    if (userTheme === 'dark') {
      setUserTheme('light')
      document.documentElement.style.setProperty('--primary-dark', '#F6F4F2')
      document.documentElement.style.setProperty('--primary-light', '#1C0F13')
    }
  }
  useEffect(() => {
    localStorage.setItem('userTheme', userTheme)
    if (history.pathname === "/") {
      setTimeout(() => {
        setIsLoading(false)
      }, 2500);
    } else {
      setIsLoading(false)
    }
  }, [history, userTheme])
  return (
    <ThemeContext.Provider value={userTheme}>
      {!isLoading ?
        <Header />
        : ""}
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
            <Route path={dashboardUrl} element={<Dashboard />} />
            <Route path={loginUrl} element={<Login />} />
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
        {!isLoading ?
          <button onClick={toggleTheme}>
            {userTheme === 'dark' ?
              <FontAwesomeIcon icon={faSun} />
              :
              <FontAwesomeIcon icon={faMoon} />
            }
          </button>
          : ""}
      </div>
    </ThemeContext.Provider >
  )
}
export default App
