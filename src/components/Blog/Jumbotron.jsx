import React, { useRef, useCallback } from "react"
import Style from "../../style/BlogModule/Blog.module.css"
import { useNavigate } from 'react-router-dom';

function Jumbotron() {
    const buttonRef = useRef()
    const navigate = useNavigate()

    function handleGoback() {
        setTimeout(() => {
            window.location.reload()
        }, 100);
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 99);
    }
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
            <div className={Style.jumbotron}>
                <h1>THIS PAGE IS STILL UNDER CONSTRUCTION : )</h1>
                <button
                    type="submit"
                    ref={buttonRef}
                    className={Style.btnPosnawr}
                    onClick={handleGoback}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className={Style.hoverEffect}></span>
                    <span className={Style.buttonText}>Go Back</span>
                </button>
            </div>
        </>
    )
}
export default Jumbotron