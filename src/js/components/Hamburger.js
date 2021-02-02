import React from "react"

const Hamburger = ({openClass, toggleOpenState}) => {
    return (
        <div 
            className="menu-btn" 
            onClick={toggleOpenState}
        >
            <span className={`menu-btn__burger ${openClass}`}></span>
        </div>
    )
}

export default Hamburger