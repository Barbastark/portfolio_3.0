
import React, {useState, useEffect, useRef} from "react"
import {throttle, addRemoveClasses} from "../utilityFunctions"

const ImageSlider = props => {
    
    const {sliderImgs: images} = props.config
    const [index, setIndex] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const containerRef = useRef(null)
    const imgRefs = useRef([])    
    
    const imgNodes = images.map(({src, alt}, i) => (
        <img 
            src={src} 
            alt={alt}
            key={src + i}
            ref={ref => { imgRefs.current[i] = ref; }}
        />
    ))

    const handleResize = throttle(setContainerHeight, 50)
    
    function setContainerHeight() {
        containerRef.current.style.height = `${imgRefs.current[0].offsetHeight}px`
    }

    function handleClick(e) {

        setDisabled(true)

        const {name} = e.currentTarget
        const imgLeave =  imgRefs.current[index]
        const enterActiveClass = "enter-active"
        const activeClass = "active"
        
        let imgEnter, enterClass, leaveClass, newIndex
                
        if(name === "prev") {
            
            enterClass = "enter-left"
            leaveClass = "leave-right"

            if(index === 0) {
                imgEnter = imgRefs.current[images.length - 1] 
                newIndex = imgNodes.length - 1
            } else {
                imgEnter = imgRefs.current[index - 1]
                newIndex = index - 1  
            }

        } else {

            enterClass = "enter-right"
            leaveClass = "leave-left"
            
            if(index === imgNodes.length - 1) {
                imgEnter = imgRefs.current[0]
                newIndex = 0
            } else {
                imgEnter = imgRefs.current[index + 1] 
                newIndex = index + 1
            }
        }

        imgEnter.classList.add(enterClass) 
        
        setTimeout(() => {
            
            imgLeave.classList.add(leaveClass)
            imgEnter.classList.add("enter-active")
            
            setTimeout(() => {
            
                addRemoveClasses("remove", imgLeave, [leaveClass, activeClass])
                addRemoveClasses("remove", imgEnter, [enterClass, enterActiveClass])
                imgEnter.classList.add(activeClass)

                setIndex(newIndex)
                setDisabled(false)
                
            }, 600)

        },10)
        
    }
    
    useEffect(() => {
                      
        imgRefs.current[0].classList.add("active")

        setTimeout(() => {
            setContainerHeight()
            window.addEventListener("resize", handleResize)
        }, 200)
        
        return function() {
            window.removeEventListener("resize", handleResize)
        }

    },[]) 

    return (
        <section className="image-slider">
            <figure 
                className="image-slider__container" 
                ref={containerRef}>
                {imgNodes}
                <button 
                    className="btn-prev"
                    type="button"
                    name="prev"
                    onClick={handleClick}
                    disabled={disabled} >
                    <i 
                        className="fas fa-chevron-left" 
                        disabled={disabled}>
                    </i>    
                </button>    
                <button 
                    className="btn-next"
                    type="button"
                    name="next"
                    onClick={handleClick}
                    disabled={disabled}>
                    <i 
                        className="fas fa-chevron-right" 
                        disabled={disabled}>
                    </i>    
                </button>    
            </figure>
        </section>
    )
}

export default ImageSlider