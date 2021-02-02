import React from "react"

const Test1 = props => {
    
    const {headerText, content} = props.data
    
    return(
        <section className="about__main slide-backward" >
            <h1 className="page-heading">Test1</h1>
            <p className="page-text">Stupid Content</p>
        </section>
    )
}

export default Test1