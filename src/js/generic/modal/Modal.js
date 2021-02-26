//Modal.js
import React from 'react';
const Modal = ({displayModal, toggleModal, children}) => {
     
    function hideModal(e) {
        e.stopPropagation()
        toggleModal()
     }
     
     return (
       <div 
         className={`modal ${displayModal ? "hide show" : "hide"}`}
         onClick={ hideModal }
        >
            <main 
                className={`modal__content ${displayModal ? "open" : ""}`}
                onClick={ e => e.stopPropagation() } >
                
                    <button 
                        className="close"
                        onClick={ hideModal }>
                            <i className="fas fa-times"></i>
                    </button>
                
                {children}
            </main>
       </div>
     );
}
export default Modal;