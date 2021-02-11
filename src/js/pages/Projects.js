import React from "react"
import PageBanner from "../components/PageBanner"
import ProjectItem from "../components/ProjectItem"

const Projects = () => {

    const items = [
        {
            src: "src/assets/project_images/friendo_thumb.jpg"
        },
        {
            src: "src/assets/project_images/breakout.jpg"
        },
        {
            src: "src/assets/project_images/movie_night.png"
        },
        {
            src: "src/assets/project_images/lights_out.png"
        },
        {
            src: "src/assets/project_images/bubbles.png"
        },
        {
            src: "src/assets/project_images/friendo_desktop.png"
        }
    ]
    const projectItems = items.map(item => <ProjectItem item={item} />)
   
    return(
        <main className="projects" >
            <PageBanner >
                <h2 className="page-heading">PROJEKT</h2>
                <p className="page-text">
                    Below you can see some projects I've been working on lately. I divide each project into four follow-up areas: comprehensive research, wireframing, design & development. This process allows me to create great product with client goals in mind.
                </p>
            </PageBanner>
            <section className="projects__container">
                {projectItems}
            </section>
        </main>
    )
}

export default Projects