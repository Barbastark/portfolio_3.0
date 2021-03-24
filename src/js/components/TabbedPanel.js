import React, {useRef, useState} from "react"

const TabbedPanel = ({data, clickHandler}) => {
    const [active, setActive] = useState(0)
    
    function handleClick(e) {
        setActive(e.target.id)
    }

    const links = data.map(({name, linkText}, i) => (
        <button 
            className={`tablink ${i === active ? "active" : ""}`} 
            key={name + i}
            id={i}
            name={name}
            onClick={handleClick}>
                {linkText}
        </button>
    ))
    
    return (
        <section className="panel">
            {links}
        </section>
    )
}

export default TabbedPanel