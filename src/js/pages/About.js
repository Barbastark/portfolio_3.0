import React from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {aboutPageData as pageData} from "../mock_data/mockData"
import AnimatedSwitch from "../components/animated_router/AnimatedSwitch"
import Nav from "../components/animated_router/Nav"
import PageBanner from "../components/PageBanner"
import AboutMe from "./components_about/AboutMe"
import Cv from "./components_about/Cv"

import Test1 from "./components_about/Test1"
import Test2 from "./components_about/Test2"


const About = () => {
    /*const navConfig = {
       paths: ["/about/aboutme", "/about/cv", "/about/test1", "/about/test2"],
       routes: [
          { to: '/about/aboutme', linkText: "om mig" },
          { to: '/about/cv', linkText: "cv" },
          { to: '/about/test1', linkText: "test1" },
          { to: '/about/test2', linkText: "test2" }
       ],
       classNames: {
           navListItemClass: "horizontal-page-toggler__menu--item",
           activeClassName: "active"
       },
    }

    const switchConfig = {
        paths: ["/about/aboutme", "/about/cv", "/about/test1", "/about/test2"],
        routes: [
            { path: '/about/aboutme', Component: AboutMe },
            { path: '/about/cv', Component: Cv },
            { path: '/about/test1', Component: Test1 },
            { path: '/about/test2', Component: Test2 }
        ],
        classNames: {
            next: "slide-forward", 
            prev: "slide-backward"
        },
        pageData
    }*/
    
    const navConfig = {
        paths: ["/about/aboutme", "/about/cv"],
        routes: [
           { to: '/about/aboutme', linkText: "om mig" },
           { to: '/about/cv', linkText: "cv" }
           
        ],
        classNames: {
            navListItemClass: "horizontal-page-toggler__menu--item",
            activeClassName: "active"
        },
    }
 
    const switchConfig = {
         paths: ["/about/aboutme", "/about/cv"],
         routes: [
             { path: '/about/aboutme', Component: AboutMe },
             { path: '/about/cv', Component: Cv },
         ],
         classNames: {
             next: "slide-forward", 
             prev: "slide-backward"
         },
         pageData
    }
    return(
        <>
        <PageBanner />
        <main className="about">
            <Router>
                <Nav config={navConfig} />
                <AnimatedSwitch 
                    config={switchConfig} 
                />
            </Router>
        </main>
        </>
    )
}

export default About