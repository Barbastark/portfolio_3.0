import React from "react"
import {useLocation} from "react-router-dom"

const Hamburger = ({openClass, toggleOpenState}) => {

    const location = useLocation()
    const {pathname} = location
    const styleObj = {background: pathname === "/" ? "transparent" : ""}
    
    return (
        <div 
            className={`menu-btn ${openClass}`}
            style={styleObj} 
            onClick={toggleOpenState}
        >
            <span className={`menu-btn__burger ${openClass}`}></span>
        </div>
    )
}

export default Hamburger