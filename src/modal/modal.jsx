import React, {useState,useEffect,useRef} from 'react';
import modal from 'react-modal';


const Modal =({buttonName, children})=>{
    
    const [isModalOpen, setOpenModal] = useState(false);
const handleOpen= setOpenModal(true);

const handleClose=setOpenModal(false);


return(
        <div>
        <button type="button" onClick={handleOpen}>{buttonName}</button>
        <ReactModal
         isOpen={false}
          contentLabel="Add contact"
            onRequestClose={handleClose}
             shouldCloseOnEsc={true}
              role="dialogue"
              > 
<button  type="button" onClick={handleClose}>Close</button>
    {children}
    </ReactModal>
        </div>
    )
};

export default ModalComponent;