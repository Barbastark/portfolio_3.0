import React, {useState} from "react"
import SiteNav from "./SiteNav"
import Hamburger from "./Hamburger"

const Header = props => {

    const [open, setOpen] = useState(false)
    const openClass = open ? "open" : ""

    const toggleOpenState = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <header className="site-header">
            <SiteNav 
                openClass={openClass} 
                toggleOpenState={toggleOpenState} 
            />
            <Hamburger 
                openClass={openClass} 
                toggleOpenState={toggleOpenState} 
            />
        </header>
    )
}

export default Header