import React from "react"
import {Route, Switch, useLocation} from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"


const AnimatedSwitch = props => {
    window.scrollTo(0, 0)
    const {paths, routes, classNames, pageData} = props.config
    const location = useLocation()
    const {state, pathname, key} = location
    //const content = pageData.filter(({slug}) => slug === pathname )[0]
    
    const currentScreen = paths.indexOf(pathname)
    const previousScreen = state ? state.previousScreen : 0
    const animationClassNames = currentScreen > previousScreen ? classNames.next : classNames.prev
    
    const routesArr = routes.map(({ path, Component }) => ( 
        <Route key={path} exact path={path} >
            <Component />
        </Route>)  
    )

    return (
        <TransitionGroup
            childFactory = {child =>
                React.cloneElement(child, {
                    classNames: animationClassNames
                })
            }
        >
            <CSSTransition
                key={key}
                classNames={animationClassNames}
                timeout={1500}
            >
                <Switch location={location}>
                    {routesArr}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AnimatedSwitch


   