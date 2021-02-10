import React from "react"

const FormNode = props => {
    
    const {data} = props
    const {type} = data
    let el = null
    
    if(["text", "password", "email"].includes(type)) {
        el = <input 
                className="auth__text-field"
                {...data} 
                value={props.value} 
                onChange={props.handleChange} 
             />
    } else if(type === "textarea") {
        el = <textarea
                className="auth__text-field"
                {...data} 
                value={props.value} 
                onChange={props.handleChange}
             >

             </textarea>
    } else if(type === "button") {
        el = <button
                className="submit" 
                {...data} 
                onClick={props.handleSubmit}
             >
                {data.text}
             </button>
    } 
   
    return el
    
}

export default FormNode