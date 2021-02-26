import React, {useState} from "react"
import Modal from "../generic/modal/Modal"
import ImageSlider from "../components/ImageSlider"
import useHover from "../hooks/useHover"

const ProjectItem = ({item}) => {
       
    const [modal, setModal] = useState(false) 
    const [hovered, btnRef] = useHover()
    const {src, text, hasModal} = item
          
    function toggleModal() {
      setModal(prevState => !prevState)
    }
    
    function handleMouseOver(e) {
        const {target} = e
        console.log(target) 
    }

    const sliderConfig = {
        sliderClass: "project-slider",
        images: [
            {
                src: "src/assets/project_images/friendo1.jpg",
                alt: "en fin bild"
            },
            {
                src: "src/assets/project_images/friendo2.jpg",
                alt: "en fin bild"
            },
            {
                src: "src/assets/project_images/friendo3.jpg",
                alt: "en fin bild"
            },
            {
                src: "src/assets/project_images/friendo7.jpg",
                alt: "en fin bild"
            }
        ]
    }  
    return (
        <article className="projects__container--item">
            <section>
                <h2>Ett fint projekt</h2>
                <p className="page-text">
                CT Author Cup is traditional mountain bike race with eighteen years experience. I provided them everything from logo design, website design & development to printed materials.
                </p>
                <button
                    className={`btn-learn-more ${hovered ? "btn-learn-more-hovered" : ""} btn-lg`}
                    onClick={toggleModal}
                    ref={btnRef}
                >VISA MER</button>
            </section>
            <section>
                <figure>
                    <img src="src/assets/project_images/friendo_desktop.png" />
                </figure>
                <button
                    className="btn-learn-more btn-sm"
                    onClick={toggleModal}
                >VISA MER</button>
            </section>
            <Modal 
                displayModal={modal}
                toggleModal={toggleModal}
            >
                <ImageSlider config={sliderConfig} />    
            </ Modal>
        </article>
    )
}

export default ProjectItem