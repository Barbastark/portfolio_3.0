import React from "react"

const AboutMe = props => {
    
    const {headerText, content} = props.data
    
    return(
        <section className="about__main slide-forward" >
            <h1 className="page-heading">{headerText}</h1>
            <p className="page-text">{content}</p>
        </section>
    )
}

export default AboutMe