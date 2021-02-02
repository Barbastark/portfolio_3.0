import {useState} from "react"

const useToggler = className => {
    
    const [toggled, setToggled] = useState(false)
        
    return [toggled, setToggled]
}

export default useToggler