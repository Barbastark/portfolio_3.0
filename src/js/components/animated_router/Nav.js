import React from "react"
import {NavLink, useLocation} from "react-router-dom" 

const Nav = props => {

    const {paths, routes, classNames, clickHandler} = props.config       
    
    const {
        navClass, 
        navListClass, 
        navListItemClass, 
        navLinkClass, 
        activeClass, 
        openClass
    } = classNames

    const location = useLocation()
    const currentScreen = paths.indexOf(location.pathname)
     
    const NavLinks = routes.map(({to, linkText}, i) => (
        <li 
            key={navListItemClass + i} 
            className={openClass ? `${navListItemClass} ${openClass}` : navListItemClass}
            onClick={clickHandler}
        >
            <NavLink
                exact
                to={{ pathname: to, state: { previousScreen: currentScreen } }}
                className={navLinkClass}  
                activeClassName={activeClass}
                activeStyle={{pointerEvents: "none"}}
            >{linkText}
            </NavLink>
        </li>     
    ))

    return (
        <nav className={openClass ? `${navClass} ${openClass}` : navClass}>
            <ul className={openClass ? `${navListClass} ${openClass}` : navListClass}>
                {NavLinks}         
            </ul>
        </nav>
    )
}

export default Nav