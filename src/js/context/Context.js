/*import React from "react"
import useopenClasses from "../custom_hooks/useopenClasses"

const Context = React.createContext()

function ContextProvider({children}) {

    const [open, setOpen] = useopenClasses("open")
        
    const toggleOpenState = () => {
        toggleNavState(prevState => !prevState)
        addNavClass(prevState => !prevState)
        addNavListClass(prevState => !prevState)
        //addNavListItemClass(prevState => !prevState)
    }

    return (
        <Context.Provider value={
            {
                toggleOpenState,
                hamburgerRef,
                navRef,
                navListRef
                //navListItemRef
            }
        }>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}*/