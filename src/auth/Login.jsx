import React, { useRef, useCallback } from "react"
import Style from "../style/DashboardModule/Login.module.css"

function Login() {
    const buttonRef = useRef(null)
    const handleMouseEnter = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return
        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top
        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])
    const handleMouseLeave = useCallback((e) => {
        const button = buttonRef.current
        if (!button) return
        const parentOffset = button.getBoundingClientRect()
        const relX = e.clientX - parentOffset.left
        const relY = e.clientY - parentOffset.top
        const span = button.querySelector(`.${Style.hoverEffect}`)
        if (span) {
            span.style.top = relY + "px"
            span.style.left = relX + "px"
        }
    }, [])
    return (
        <>
            <form action="" className={Style.form}>
                <h1>Login</h1>
                <input type="text" name="" id="" placeholder="Username" className={Style.input} />
                <input type="password" name="" id="" placeholder="Password" className={Style.input} />
                <button
                    type="submit"
                    ref={buttonRef}
                    className={Style.button}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={Style.hoverEffect}></span>
                    <span className={Style.buttonText}>Login</span>
                </button>
            </form>
        </>
    )
}

export default Login