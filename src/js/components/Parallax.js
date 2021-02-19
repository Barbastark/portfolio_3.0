import React, {useEffect, useRef} from "react"

const Parallax = ({speed, ypos, containerClass, children}) => {

    const parallaxRef = useRef(null)
    const handleScroll = throttle(scrollHandler, 10)
   
    function throttle(fn, wait) {
        
        let time = Date.now()

        return function() {
            if ((time + wait - Date.now()) < 0) {
                fn()
                time = Date.now()
            }
        }
    }
    
    function scrollHandler() {
       const pageTop = window.scrollY
       const newYPos = (ypos - (pageTop * speed))
       parallaxRef.current.style.transform = `translate(0, ${newYPos}px)`
    }


    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll, true)
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
          }
    }, []) 

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