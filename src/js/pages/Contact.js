import React from "react"
import {contactFormData as data} from "../mock_data/mockData"
import FormFactory from "../generic/form_factory/FormFactory"

const Contact = () => {
    
    const {nodes, state} = data
    
    const [formNodes] = FormFactory(nodes, state)
    
    return(
        <main className="contact">
            <section className="contact__main"> 
            <h1 className="page-heading">Kontakt</h1>
                <form>
                    {formNodes}
                </form>
            </section>
        </main>
    )
}

export default Contact