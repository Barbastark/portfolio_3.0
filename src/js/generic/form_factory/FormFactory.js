import React, {useState} from "react"
import FormNode from "./FormNode"

const FormFactory = (formData, state) => {

    const [inputData, setInputData] = useState(state)
    
    function handleChange(e) { 
        
        const {name, value} = e.target
        
        setInputData(prevInputData => (
            {...prevInputData, [name]: value}
        ))
    }

    function handleSubmit(e) {
        e.preventDefault()
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