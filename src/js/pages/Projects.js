import React from "react"
import ModalGallery from "../components/modal_gallery/modal"

const Projects = () => {
    return(
        <main>
            <section style={{paddingTop: "50px"}} className="about"> 
                <h1>Projects</h1>
                <ModalGallery />
            </section>
        </main>
    )
}

export default Projects