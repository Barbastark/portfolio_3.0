import React, {useEffect, useRef} from "react"
import {throttle} from "../utilityFunctions"

const Parallax = ({speed, ypos, containerClass, children}) => {
    
    const parallaxRef = useRef(null)
    const handleScroll = throttle(scrollHandler, 20)
       
    function scrollHandler() { 
       
        const pageTop = window.scrollY
        const newYPos = (ypos - (pageTop * speed))
       
        if(parallaxRef.current) {
            parallaxRef.current.style.transform = `translate(0, ${newYPos}px)`
        }
    }

    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll, true)
        return () => window.removeEventListener("scroll", handleScroll);
        
    },[]) 

    return(
        <section
            className={containerClass} 
            ref={parallaxRef}
        >
            {children}
        </section>
    )
}

export default Parallax