import React from "react"
import AnimatedSwitch from "./generic/animated_router/AnimatedSwitch"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => { 
    const switchConfig = {
        paths: ["/", "/about", "/projects", "/contact"],
        routes: [
            { path: '/', Component: Home },
            { path: '/about', Component: About },
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