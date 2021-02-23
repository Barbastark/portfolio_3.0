import React, {useState} from "react"
import Modal from "../generic/modal/Modal"

const ProjectItem = ({item}) => {
       
    const [modal, setModal] = useState(false) 
    const {src, text, hasModal} = item
          
    function toggleModal() {
      setModal(prevState => !prevState)
    }
      
    return (
        <article className="projects__container--item">
            <section>
                <h2>Ett fint projekt</h2>
                <p className="page-text">
                CT Author Cup is traditional mountain bike race with eighteen years experience. I provided them everything from logo design, website design & development to printed materials.
                </p>
                <button
                    className="more-info btn-lg"
                    onClick={toggleModal}
                >VISA MER</button>
            </section>
            <section>
                <figure>
                    <img src="src/assets/project_images/friendo_desktop.png" />
                </figure>
                <button
                    className="more-info btn-sm"
                    onClick={toggleModal}
                >VISA MER</button>
            </section>
            <Modal 
                displayModal={modal}
                toggleModal={toggleModal}
            >
                <h1>{text}</h1>    
            </ Modal>
        </article>
    )
}

export default ProjectItem