import React from "react"

const PanelContent = ({children, name}) => {
    return (
        <section
            name={name} 
            className="panel-content">
            {children}        
        </section>
    )
}

export default PanelContent