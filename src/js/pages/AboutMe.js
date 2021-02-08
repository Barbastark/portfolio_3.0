import React from "react"
import {aboutPageData as data} from "../mock_data/mockData"
const AboutMe = () => {
    
    const {headerText, content} = data
    
    return(
        <section className="about__main slide-forward" >
            <h1 className="page-heading">{headerText}</h1>
            <p className="page-text">{content}</p>
        </section>
    )
}

export default AboutMe