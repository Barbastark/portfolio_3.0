import React, {useState, useEffect, useRef} from "react"

const ImageSlider = props => {
    
    const {sliderClass, images} = props.config
    const [index, setIndex] = useState(0)
    const containerRef = useRef(null)
    const refs = useRef([])    
          
    const imgNodes = images.map(({src, alt}, i) => (
        <img 
            src={src} 
            alt={alt}
            key={src + i}
            ref={ref => { refs.current[i] = ref; }}
        />
    ))
    
    function addRemoveClasses(action, el, arr) {
        arr.forEach((className) => {
            action === "remove" ? el.classList.remove(className) : el.classList.add(className)
        })
    }

    function transition(imgEnter, imgLeave, enterFrom, leaveTo, newIndex ) {

        imgEnter.classList.add(enterFrom) 
        
        setTimeout(() => {
            
            imgLeave.classList.add(leaveTo)
            imgEnter.classList.add("enter-active")
            
            setTimeout(() => {
            
                addRemoveClasses("remove", imgLeave, [leaveTo, "active"])
                addRemoveClasses("remove", imgEnter, [enterFrom, "enter-active"])
                imgEnter.classList.add("active")
                setIndex(newIndex)
            
            }, 200)

        },100)
    }

    function handleClick(e) {
          
        const {name} = e.currentTarget
        const imgLeave =  refs.current[index]
        let imgEnter, enterClass, leaveClass, newIndex
                
        if(name === "prev") {
            
            enterClass = "enter-left"
            leaveClass = "leave-right"

            if(index === 0) {
                imgEnter = refs.current[images.length - 1] 
                newIndex = imgNodes.length - 1
            } else {
                imgEnter = refs.current[index - 1]
                newIndex = index - 1  
            }
        } else {

            enterClass = "enter-right"
            leaveClass = "leave-left"
            
            if(index === imgNodes.length - 1) {
                imgEnter = refs.current[0]
                newIndex = 0
            } else {
                imgEnter = refs.current[index + 1] 
                newIndex = index + 1
            }
        }
        transition(imgEnter, imgLeave, enterClass, leaveClass, newIndex)
    }

    function setElementHeight(height, el) {
        el.style.height = `${height}px`
    }

    useEffect(() => {
                      
        refs.current[0].classList.add("active")

        setTimeout(() => {
            setElementHeight(refs.current[0].offsetHeight, containerRef.current)
        }, 200)

        window.onresize = () => {
            setElementHeight(refs.current[0].offsetHeight, containerRef.current)
        }
        
        return function() {
            window.removeEventListener("resize")
        }
        
    },[]) 

    return (
        <section className="image-slider">
            <figure className="image-slider__container" ref={containerRef}>
                {imgNodes}
                <button 
                    className="btn-prev"
                    type="button"
                    name="prev"
                    onClick={handleClick}>
                    <i className="fas fa-chevron-left"></i>    
                </button>    
                <button 
                    className="btn-next"
                    type="button"
                    name="next"
                    onClick={handleClick}>
                    <i className="fas fa-chevron-right"></i>    
                </button>    
            </figure>
        </section>
    )
}

export default ImageSlider