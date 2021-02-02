import React from "react"
import {NavLink, useLocation} from "react-router-dom" 

const Nav = props => {

    const {paths, routes, classNames} = props.config       
    const {navClass, navListClass, navListItemClass, activeClassName} = classNames
    const location = useLocation()
    const currentScreen = paths.indexOf(location.pathname)
     
    const NavLinks = routes.map(({to, linkText}, i) => (
        <li 
            style={{ width: `${100 / paths.length}%`}} 
            key={navListItemClass + i} 
            className={navListItemClass}
        >
            <NavLink
                to={{ pathname: to, state: { previousScreen: currentScreen } }}  
                activeClassName={activeClassName} 
                activeStyle={{pointerEvents: "none"}}
            >{linkText}
            </NavLink>
        </li>     
    ))

    return (
        <nav className={navClass}>
            <ul className={navListClass}>
                {NavLinks}         
            </ul>
        </nav>
    )
}

export default Nav