import React, {useState, useEffect, useRef} from "react"
import Modal from "../generic/modal/Modal"
import ImageSlider from "../components/ImageSlider"
import TabbedPanel from "../components/TabbedPanel"
import PanelContent from "../components/PanelContent"
import useHover from "../hooks/useHover"

const ProjectItem = ({item}) => {
       
    const [modal, setModal] = useState(false)
    const [height, setHeight] = useState(0)  
    const [hovered, btnRef] = useHover()
    const {projectHeader: header, projectIntro: intro, projectImg: img, btnText, sliderData} = item
    const contentRef = useRef(null) 
    
    const linkData = [
        {name: "details", linkText: "Info"},
        {name: "tech", linkText: "Tech"}
    ]

    function toggleModal() {
      setModal(prevState => !prevState)
    }
    
    function setContainerHeight() {
        if(modal) {
            setHeight(contentRef.current.parentElement.clientHeight - contentRef.current.offsetTop)
        }
    }   
    
    function replaceContent() {
        console.log("clicked!!")
    }

    useEffect(() => {
        setContainerHeight()
        window.addEventListener("resize", setContainerHeight)
        return () => window.removeEventListener("resize", setContainerHeight)
    }, [modal])
    
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
                <main 
                    className="project" 
                    ref={contentRef} 
                    style={{height: `${height}px`}}>
                    <TabbedPanel data={linkData} clickHandler={replaceContent} />
                    <PanelContent>
                        <p>CT Author Cup is traditional mountain bike race with eighteen years experience.I provided them everything from logo design, website design & development to printed materials.</p>
                    </PanelContent>
                    <PanelContent>
                        <p>CT Author Cup is traditional mountain bike race with eighteen years experience.I provided them everything from logo design, website design & development to printed materials.</p>
                    </PanelContent>
                </main>    
            </ Modal>
        </article>
    )
}

export default ProjectItem