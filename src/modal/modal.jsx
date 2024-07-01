import React, {useState,useEffect,useRef} from 'react';
import ReactModal from 'react-modal';


const Modal =({buttonName, children})=>{
    
    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpen=()=> setModalOpen(true);

const handleClose= ()=>setModalOpen(false);


return(
        <div>
        <button type="button" onClick={handleOpen}>{buttonName}</button>
        <ReactModal
         isOpen={isModalOpen}
         contentLabel={buttonName}
            onRequestClose={handleClose}
             shouldCloseOnEscape={true}
              role="dialogue"
> 
<button type="button" onClick={handleClose}>Close</button>
    {children}
    </ReactModal>
        </div>
    );
};

export default Modal;