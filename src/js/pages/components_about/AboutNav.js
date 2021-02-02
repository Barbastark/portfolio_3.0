import React from "react"
import AboutNavItem from "./AboutNavItem"

const AboutNav = props => {

    const {navData} = props.data
    
    const navItems = navData.map(item => (
        <AboutNavItem 
            key={item.key} 
            data={
                {...item}
            }
            exact 
        />
    ))    
    
    return(
        <nav className="horizontal-page-toggler">
            <ul className="horizontal-page-toggler__menu">
                {navItems}
            </ul>
        </nav>
    )
}

export default AboutNav