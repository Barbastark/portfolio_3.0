import React, {useEffect, useState, useRef} from "react"
import {useLocation} from "react-router-dom"

const Hamburger = ({openClass, toggleOpenState, open}) => {
    
    const [mounted, setMounted] = useState(false)
    const hamburgerRef = useRef(null)
    const location = useLocation()
    const {pathname} = location
    const styleObj = {background: pathname === "/" ? "transparent" : ""}
    
    function toggleOpen() {
        
        let first = "opening"
        let second = "open"
        
        const hamburger = hamburgerRef.current
        
        if(hamburger.classList.contains(first)) {
            [first, second] = [second, first]
        }
        
        hamburgerRef.current.classList.toggle(first)
        
        setTimeout(() => {
            hamburgerRef.current.classList.toggle(second)
        },500)
    }

    useEffect(() => {
        mounted ? toggleOpen() : setMounted(true)
    }, [open])

    return (
        <div 
            className={`menu-btn  ${openClass}`}
            style={styleObj} 
            onClick={toggleOpenState}
        >   
            
            <span 
                className={`menu-btn__burger`}
                ref={hamburgerRef}>

            </span>
        </div>
    )
}

export default Hamburger