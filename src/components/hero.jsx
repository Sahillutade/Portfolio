import { useEffect, useState } from "react"


export function Hero(){

    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <section id="home" className="heroSec">
            {/* Animated Background Gradient */}
            <div className="heroSecCont">
                <div className="heroBackAni"></div>
                <div className="heroBackAni2"></div>
            </div>

            <div className="heroMain">
                <div className="heroMainCont" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
                    <h1 className="heroHeading">
                        <span className="headingText">Full Stack Developer</span>
                        <br />
                        <span className="headingText2">Building Digital Experiences</span>
                    </h1>

                    <p className="heroPara">
                        Passionate about crafting modern, scalable web applications with clean code and 
                        user-centric design.
                        Specialized in React, Node.js, and Java Backend technologies.
                    </p>
                    {/* document.getElementById('projects')?.scrollIntoView({ behavior: "smooth" }); */}
                    <div className="heroBtns">
                        <button className="myWork" onClick={() => { window.location.href="https://drive.google.com/file/d/18lsrtkrxp33ChsOXHaVCOFLBP1hN6i4-/view?usp=sharing"; }}>
                            View My Resume
                        </button>
                        <button className="inTouch" onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" }); }}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="indicator">
                    <div className="bi bi-chevron-down"></div>
                </div>
            </div>
        </section>
    )
}