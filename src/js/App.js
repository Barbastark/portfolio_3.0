import React from "react"
import {Switch, Route, useHistory} from "react-router-dom"
import {routerData, aboutPageData, homePageData} from "./mock_data/mockData"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => { 


    const fetchComponent = (component, path) => {
        switch(component) {
            case "home" :
                return <Home data={homePageData} />
            break;
    
            case "about" :
                return aboutPageData.map((item, i) => {
                    if(item.slug === path) {
                        return <About key={i} data={{...item}} />
                    }
            })
            break;
    
            case "projects" :
                return <Projects />
            break;
    
            case "contact" :
                return <Contact />
            break;
    
            default: return false
        }
    }
    
    const routes = routerData.map(({key, exactPath, path, component }) => {
        if(exactPath) {
            return(
                <Route exact path={path} key={key} >
                    {fetchComponent(component, path)}
                </Route>
            )
        }
        return (
            <Route path={path} key={key}>
                {fetchComponent(component, path)}
            </Route>
        ) 
    }) 
    
    return (
        <>
        
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/about/aboutme">
                    <About />
                </Route>
                <Route path="/about/cv">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        
        
        </>
    )
}

export default App