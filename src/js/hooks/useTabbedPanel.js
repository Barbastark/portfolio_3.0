import {useEffect, useRef} from "react"

const useTabbedPanel = (useHash = false) => {

    const linkRef = useRef(null)
    const targetRef = useRef(null)

    useEffect(() => {
        
        /**
         * const current fixes bug caused by React 17
         * issue: linkRef.current is null when component unmounts
         * remove as soon as the careless individuals responsible for this mess
         * have done their job? :)    
         *  */  

        const current = linkRef.current 
        current.addEventListener("click", init)
        return () => current.removeEventListener("click", init)
    }, [])

    return [ linkRef, targetRef ]
}

export default useTabbedPanel