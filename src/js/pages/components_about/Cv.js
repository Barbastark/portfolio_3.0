import React from "react"

const Cv = props => {
    
    const {headerText, content} = props.data
    
    return(
        <section className="about__main slide-backward" >
            <h1 className="page-heading">{headerText}</h1>
            <p className="page-text">{content}</p>
        </section>
    )
}

export default Cv