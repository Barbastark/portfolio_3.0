import React from "react"
import {NavLink} from "react-router-dom"

const AboutNavItem = props => {
    
    const {id, to, linkText} = props.data
        
    return(
        <li className="horizontal-page-toggler__menu--item">
            <NavLink 
                to={to}
                activeClassName="active" 
                onClick={() =>
                    history.push({
                      pathname: routes[(currentScreen - 1) % routes.length],
                      state: { previousScreen: currentScreen }
                    })
                  }
            >{linkText}
            </NavLink>
        </li>
    )
}

export default AboutNavItem