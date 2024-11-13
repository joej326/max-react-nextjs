import { useState } from 'react';
import classes from './Modal.module.scss';




// children is a reserved prop property that represents the content sandwiched inbetween the opening and closing tags (basically ng-content)

// e.g. 
// <OuterComponent>
//     <InnerComponent>
//     </InnerComponent>
// </OuterComponent>

// children represents the inner component.

function Modal(props) {
    


    return (
        <>
            <div onClick={props.onClose} className={classes.backdrop} />
            <dialog open className={classes.modal}>{ props.children }</dialog> 
        </>
    );
}


export default Modal;