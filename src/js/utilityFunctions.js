
export function throttle(fn, wait) {
        
    let time = Date.now()
    
    return () => {
        if ((time + wait - Date.now()) < 0) {
            fn()
            time = Date.now()
        }
    }
}

export function addRemoveClasses(action, el, arr) {
    arr.forEach((className) => {
        action === "remove" ? el.classList.remove(className) : el.classList.add(className)
    })
}