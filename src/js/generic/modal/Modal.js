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
                <header className="header">
                    <button 
                        className="close"
                        onClick={ hideModal }>&times;
                    </button>
                </header>
                {children}
            </main>
       </div>
     );
}
export default Modal;