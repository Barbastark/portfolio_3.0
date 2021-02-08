import React from "react"
import Nav from "../components/animated_router/Nav"

const SiteNav = ({openClass, toggleOpenState}) => {
    const navConfig = {
        paths: ["/", "/aboutme", "/cv", "/projects", "/contact"],
        routes: [
            { to: '/', linkText: "home" },
            { to: '/aboutme', linkText: "om mig" },
            { to: '/cv', linkText: "mitt cv" },
            { to: '/projects', linkText: "projekt" },
            { to: '/contact', linkText: "kontakt" }
           
        ],
        classNames: {
            navClass: "nav",
            navListClass: "menu-nav",
            navListItemClass: "menu-nav__item",
            navLinkClass: "menu-nav__link",
            activeClass: "active",
            openClass: openClass
        },
        clickHandler: toggleOpenState
    }
    return(
         <Nav config={navConfig} />
    )
}

export default SiteNav