import React from "react"


const ProjectItem = props => {
    
   
    
    const {src} = props.item
      
    return (
        <article className="projects__container--item">
            <section>
                <h2>Ett fint projekt</h2>
                <p className="page-text">
                CT Author Cup is traditional mountain bike race with eighteen years experience. I provided them everything from logo design, website design & development to printed materials.
                </p>
                
            </section>
            <section>
                <figure>
                    <img src="src/assets/project_images/friendo_desktop.png" />
                </figure>
                <button>VISA MER</button>
            </section>
        </article>
    )
}

export default ProjectItem