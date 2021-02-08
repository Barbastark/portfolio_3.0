import React from "react"
import AnimatedSwitch from "./components/animated_router/AnimatedSwitch"
import Header from "./components/Header"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Cv from "./pages/Cv"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => { 
    const switchConfig = {
        paths: ["/", "/aboutme", "/cv", "/projects", "/contact"],
        routes: [
            { path: '/', Component: Home },
            { path: '/aboutme', Component: AboutMe },
            { path: '/cv', Component: Cv },
            { path: '/projects', Component: Projects },
            { path: '/contact', Component: Contact }
        ],
        classNames: {
            next: "slide-forward", 
            prev: "slide-backward"
        }
    }
    
    return (
        <>
            <Header />
            <AnimatedSwitch config={switchConfig} />
        </>
    )
}

export default App