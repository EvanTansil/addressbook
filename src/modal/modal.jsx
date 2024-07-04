import React, {useState,useEffect,useRef} from 'react';
import {Button, Dialog, DialogTrigger, Modal} from 'react-aria-components';


const ModalComponent =({buttonName, children})=>{
    
return(
        <div>
            <DialogTrigger>
        <Button>{buttonName}</Button>
        <Modal>
        <Dialog>
      
    {({close})=>(<>
    {children}
    <Button onPress={close}>Cancel</Button>
    </>)}
    </Dialog>
    </Modal>
    </DialogTrigger>
        </div>
    );
};

export default ModalComponent;