import React from "react"
import {NavLink} from "react-router-dom"

const SiteNavItem = props => {
    
    const {to, linkText, openClass, toggleOpenState} = props.data
        
    return (
        <li 
            className={`menu-nav__item ${openClass}`}
            onClick={toggleOpenState}
        >
            <NavLink 
                exact to={to} 
                className="menu-nav__link"
                activeClassName="active"
            > {linkText}
            </NavLink>
        </li>
    )
}

export default SiteNavItem