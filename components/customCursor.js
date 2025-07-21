"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function CustomCursor() {
    const cursorOuterRef = useRef(null)
    const cursorInnerRef = useRef(null)
    const [theme, setTheme] = useState("light-theme")

    useEffect(() => {
        const outer = cursorOuterRef.current
        const inner = cursorInnerRef.current

        gsap.set([outer, inner], {
            xPercent: -50,
            yPercent: -50,
        })

        const moveCursor = (e) => {
            const scrollContainer = document.querySelector('[data-scroll-container]') || document.body
            const transform = getComputedStyle(scrollContainer).transform

            let offsetY = 0
            if (transform !== "none") {
                const matrix = new DOMMatrix(transform)
                offsetY = matrix.m42
            }

            const adjustedY = e.clientY - offsetY

            gsap.to(outer, {
                duration: 0.2,
                x: e.clientX,
                y: adjustedY,
                ease: "power2.out",
            })

            gsap.to(inner, {
                duration: 0.7,
                x: e.clientX,
                y: adjustedY,
                ease: "power2.out",
            })
        }

        window.addEventListener("mousemove", moveCursor)

        // Detect theme from body class
        const checkTheme = () => {
            const current = document.body.classList.contains("dark-theme") ? "dark-theme" : "light-theme"
            setTheme(current)
        }

        checkTheme()

        const observer = new MutationObserver(checkTheme)
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            observer.disconnect()
        }
    }, [])

    // Colors based on theme
    const cursorColors = {
        light: {
            border: "2px solid rgba(0, 0, 0, 0.4)",
            dot: "#333"
        },
        dark: {
            border: "2px solid rgba(255, 255, 255, 0.2)",
            dot: "#fff"
        }
    }

    const currentStyle = theme === "dark-theme" ? cursorColors.dark : cursorColors.light

    return (
        <>
            <div
                ref={cursorOuterRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: currentStyle.border,
                    pointerEvents: "none",
                    zIndex: 9999,
                    transform: "translate(-50%, -50%)",
                    willChange: "transform",
                    backgroundColor: "transparent",
                    transition: "border 0.3s ease",
                }}
            />

           
        </>
    )
}
