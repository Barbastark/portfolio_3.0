import React, {useState} from "react"
import Parallax from "../components/Parallax"
import ProjectItem from "../components/ProjectItem"

const Projects = () => {

    const [modal, setModal] = useState(false) 
          
    function toggleModal() {
      setModal(prevState => !prevState)
    }

    const items = [
        {
            src: "src/assets/project_images/friendo_thumb.jpg",
            hasModal: true
        },
        {
            src: "src/assets/project_images/breakout.jpg",
            hasModal: true
        },
        {
            src: "src/assets/project_images/movie_night.png",
            hasModal: true
        },
        {
            src: "src/assets/project_images/lights_out.png",
            hasModal: true
        },
        {
            src: "src/assets/project_images/bubbles.png",
            hasModal: true
        },
        {
            src: "src/assets/project_images/friendo_desktop.png",
            hasModal: true
        }
    ]
    const projectItems = items.map(item => (
        <ProjectItem 
            item={item} 
            modal={modal} 
            toggleModal={toggleModal} 
        />
    ))
   
    return(
        <main className="projects" >
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
                    <h2 className="page-heading">PROJEKT</h2>
                    <p className="page-text">
                        Below you can see some projects I've been working on lately. I divide each project into four follow-up areas: comprehensive research, wireframing, design & development. This process allows me to create great product with client goals in mind.
                    </p>
                </Parallax>    
            </Parallax>
            <section className="projects__container">
                {projectItems}
            </section>
        </main>
    )
}

export default Projects