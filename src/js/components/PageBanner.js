import React, {useEffect, useRef} from "react"

const PageBanner = ({children}) => {

    const bannerRef = useRef(null)
        
    const parallax = () => {
        const yPos = (window.pageYOffset / 3)
        const coords = `0px ${yPos}px`
        bannerRef.current.style.backgroundPosition = coords;
    }

    useEffect(() => {
        
        window.addEventListener("scroll", parallax, true)
        document.getElementById("root").style.overflow = "visible"

        return () => {
            window.removeEventListener("scroll", parallax);
            document.getElementById("root").removeAttribute("style")
          }
    }, []) 

    return(
        <section 
            className="page-banner" 
            ref={bannerRef}
        >
            {children}
        </section>
    )
}

export default PageBanner