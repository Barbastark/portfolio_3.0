import React from "react"
import Parallax from "../components/Parallax"
import ProjectItem from "../components/ProjectItem"
import useSmoothScroll from "../hooks/useSmoothScroll"
import {projectItems as items} from "../mock_data/projectsData"

const Projects = () => {

    const [linkRef, targetRef] = useSmoothScroll()    

    
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