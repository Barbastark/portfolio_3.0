import {useEffect, useRef} from "react"

const useSmoothScroll = (useHash = false) => {

    const linkRef = useRef(null)
    const targetRef = useRef(null)

    function smoothScroll(el, scrollBy = 20) {
            
        let scrollTop = window.scrollY        
        let scrollTo = el.getBoundingClientRect().top - ( -scrollTop )
               
        function scroll() {
            
            scrollTop += scrollBy
            window.scrollTo(0, scrollTop) 
                        
            if (scrollTop >= scrollTo) {
                clearInterval(intervalId)
            }
        }
        
        const intervalId = setInterval(scroll, 1)
    }

    function init(e) {
        
        const hash = linkRef.current.hash 
        
        if (hash) {
            
            e.preventDefault();
            smoothScroll(targetRef.current)
            
            if(useHash) {
                window.location.hash = hash;
            }
        }
    }

    useEffect(() => {
        
        /**
         * const current fixes bug caused by React 17
         * issue: linkRef.current is null when component unmounts
         * remove as soon as the careless individuals responsible for this mess
         * have done their job? :)    
         **/  

        const current = linkRef.current 
        current.addEventListener("click", init)
        return () => current.removeEventListener("click", init)
    }, [])

    return [ linkRef, targetRef ]
}

export default useSmoothScroll