import React from "react"
import {cvData as data} from "../mock_data/mockData"

const Cv = () => {
    
    const {headerText, content} = data
    
    return(
        <section className="about__main slide-backward" >
            <h1 className="page-heading">{headerText}</h1>
            <p className="page-text">{content}</p>
        </section>
    )
}

export default Cv