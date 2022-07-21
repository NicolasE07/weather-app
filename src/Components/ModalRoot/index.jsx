import React from 'react';
import ReactDOM from 'react-dom';

import './ModalRoot.css'
const ModalRoot = ({children}) => {
    return ReactDOM.createPortal(
        <div className="containerModal">
        {children}
        </div>,
        document.getElementById('modal-root')

    );
}
export {ModalRoot}
 