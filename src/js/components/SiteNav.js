import React from "react"
import SiteNavItem from "./SiteNavItem"
import {siteNavData as data} from "../mock_data/mockData"

const SiteNav = ({openClass, toggleOpenState}) => {
    
    const navItems = data.map(item => {
        
            return <SiteNavItem 
                        key={item.key} 
                        data={{
                            ...item, 
                        openClass, 
                        toggleOpenState
                }} />
        })
        

    return(
        <nav className={`nav ${openClass}`}>
            <ul className={`menu-nav ${openClass}`}>
                {navItems}
            </ul>
        </nav>
    )
}

export default SiteNav