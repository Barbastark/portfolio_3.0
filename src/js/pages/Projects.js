import React, {useEffect, useRef} from "react"
import Parallax from "../components/Parallax"
import ProjectItem from "../components/ProjectItem"
import useSmoothScroll from "../hooks/useSmoothScroll"

const Projects = () => {

    const [linkRef, targetRef] = useSmoothScroll()    

    const items = [
        {
            src: "src/assets/project_images/friendo_thumb.jpg",
            text: "Header1",
            hasModal: true
        },
        {
            src: "src/assets/project_images/breakout.jpg",
            text: "Header2",
            hasModal: true
        },
        {
            src: "src/assets/project_images/movie_night.png",
            text: "Header3",
            hasModal: true
        },
        {
            src: "src/assets/project_images/lights_out.png",
            text: "Header4",
            hasModal: true
        },
        {
            src: "src/assets/project_images/bubbles.png",
            text: "Header5",
            hasModal: true
        },
        {
            src: "src/assets/project_images/friendo_desktop.png",
            text: "Header6",
            hasModal: true
        }
    ]
    const projectItems = items.map((item, i) => (
        <ProjectItem 
            key={i}
            item={item} 
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
                    <p className="page-intro">
                        Below you can see some projects I've been working on lately. I divide each project into four follow-up areas: comprehensive research, wireframing, design & development. This process allows me to create great product with client goals in mind.
                    </p>
                    <a href="#projects__container" ref={linkRef}>
                        <svg className="arrow-down">
                            <g>
                                <polygon points="26.5,17.688 9.114,5.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,5.779"/>
                            </g>
                        </svg>
                    </a>
				</Parallax>    
            </Parallax>
            <section 
                id="projects__container" 
                className="projects__container"
                ref={targetRef}
            >
                {projectItems}
            </section>
        </main>
    )
}

export default Projects