import React, {useState} from "react"
import Modal from "../generic/modal/Modal"
import ImageSlider from "../components/ImageSlider"
import useHover from "../hooks/useHover"

const ProjectItem = ({item}) => {
       
    const [modal, setModal] = useState(false) 
    const [hovered, btnRef] = useHover()
    const {projectHeader: header, projectIntro: intro, projectImg: img, btnText, sliderData} = item
          
    function toggleModal() {
      setModal(prevState => !prevState)
    }
            
    return (
        <article className="projects__container--item">
            <section>
                <h2>{header}</h2>
                <p className="page-text">
                    {intro}
                </p>
                <button
                    className={`btn-learn-more btn-lg ${hovered ? "btn-learn-more-hovered" : ""}`}
                    onClick={toggleModal}
                    ref={btnRef}
                >{btnText}</button>
            </section>
            <section>
                <figure>
                    <img src={img} />
                </figure>
                <button
                    className="btn-learn-more btn-sm"
                    onClick={toggleModal}
                >{btnText}</button>
            </section>
            <Modal 
                displayModal={modal}
                toggleModal={toggleModal}
            >
                <ImageSlider config={sliderData} />    
            </ Modal>
        </article>
    )
}

export default ProjectItem