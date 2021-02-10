import React, {useState, useRef} from "react"
import FormNode from "./FormNode"

const FormFactory = (formData, state) => {

    const [inputData, setInputData] = useState(state)
    
    const handleChange = e => { 
        
        const {name, value} = e.target
        
        setInputData(prevInputData => (
            {...prevInputData, [name]: value}
        ))
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("clicked!!")
    }
    
    const formNodes = formData.map(obj => {

        const {type, name, id} = obj
        
        return type !== "button" ?  
            <FormNode 
                key={id} 
                data={obj}
                value={inputData[name]}
                handleChange={handleChange}
            />:
            <FormNode 
                key={id} 
                data={obj} 
                handleSubmit={handleSubmit}
            />
    }) 
    
    return [formNodes]
} 

export default FormFactory