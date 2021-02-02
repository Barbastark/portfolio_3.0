import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./js/context/Context"
import App from "./js/App"
import './scss/main.scss'

ReactDOM.render(
    <Router>
        <App />
    </ Router>
    , document.getElementById("root")
)





