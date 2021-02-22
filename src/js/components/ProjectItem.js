import React from "react"
import Modal from "../generic/modal/Modal"

const ProjectItem = ({item, modal, toggleModal}) => {
       
    const {src, hasModal} = item
      
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
                <button
                    className="more-info"
                    onClick={toggleModal}
                >VISA MER</button>
            </section>
            <Modal 
                displayModal={modal}
                toggleModal={toggleModal}
            />
        </article>
    )
}

export default ProjectItem