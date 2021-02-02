import React, {useState, useEffect} from "react"
import {homePageData as pageData} from "../mock_data/mockData"

const Home = () => {
    
    const [show, setShow] = useState(false)
    const showClass = show ? "show" : ""
    const {firstName, lastName, occupation} = pageData
    
    useEffect(() => {
        setTimeout(() => {setShow(true)}, 500)
    }, [])
    
    return(
        <main className="full-height">
            <section className="home">
                <h1 className={`home__name ${showClass}`}>
                    {firstName} <span className="home__name--last">{lastName}</span>
                </h1>
                <h2 className={`home__occupation ${showClass}`}>{occupation}</h2>
            </section>
        </main>
    )
}

export default Home