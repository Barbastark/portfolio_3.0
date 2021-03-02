import React from "react"
import {aboutPageData} from "../mock_data/aboutPageData"
import {cvData} from"../mock_data/cvData"
import Parallax from "../components/Parallax"

const About = () => {
   return(   
        <main className="about">
            <Parallax
                speed={-0.5}
                ypos={0}
                containerClass="page-banner"
            >
                <Parallax
                    speed={0.2}
                    ypos={0}
                    containerClass="page-banner__content"
                >
                <h1 className="page-heading">Om mig</h1>
                <p className="page-text">Här kommer lite information om snubben som har byggt den här bedårande hemsidan. Ta en kopp kaffe, luta dig tillbaka och läs!!</p>
                </Parallax>
            </Parallax>
            <section className="about__container">
                <h2 className="page-heading">{aboutPageData.headerText}</h2>
                <p className="page-text">{aboutPageData.content}</p>
            </section>
            <section className="about__container" >
                <h2 className="page-heading">{cvData.headerText}</h2>
                <p className="page-text">{cvData.content}</p>
            </section>                
        </main>
    )
}

export default About