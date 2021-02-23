import {useState, useEffect, useRef} from "react"

const useSmoothScroll = () => {

    const linkRef = useRef(null)
    const targetRef = useRef(null)

    function smoothScroll(el, scrollBy = 30) {
            
        let scrollTop = window.scrollY        
        let scrollTo = el.getBoundingClientRect().top - ( -scrollTop )
               
        function scroll() {
            
            scrollTop += scrollBy
            window.scrollTo(0, scrollTop) 
                        
            if (scrollTop >= scrollTo) {
                clearInterval(id)
            }
        }
        
        const id = setInterval(scroll, 10)
    }

    function init(e) {
        
        const hash = linkRef.current.hash 
        
        if (hash) {
            e.preventDefault();
            smoothScroll(targetRef.current)
            //window.location.hash = hash;
        }
    }

    useEffect(() => {
        
        linkRef.current.addEventListener("click", init)
        
        return () => linkRef.current.addEventListener("click", init)
       
    }, [])

    return [ linkRef, targetRef ]
}

export default useSmoothScroll