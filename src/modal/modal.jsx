import React, {useState,useEffect,useRef} from 'react';

import ReactModal from 'react-modal';

const Modal =({btnName =''})=>{
    
    const [isModalOpen, setOpenModal] = useState(false);
const handleOpen=()=>{
    setOpenModal(true);
};
const handleClose=()=>{
SetOpenModal(false);
}

return(
        <>
        <button type="button">{btnName}</button>
        <ReactModal isOpen={isModalOpen} contentLabel="Add contact"  onRequestClose={handleClose}> 
<button ref={closeButtonRef} onClick={handleClose}>Close</button>

        </ReactModal>
        </>
    )
};

export default Modal;