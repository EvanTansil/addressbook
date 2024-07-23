import React from 'react';
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';
import ModalComponent from '../modal/modal'; 
import DeleteContact from './deleteContact';
import EditContact from '../fields/editContact';
const ActionMenu =({rowId})=>{
    return(
        <MenuTrigger>
            <Button>Action Menu</Button>
        <Popover>
            <Menu>
                <MenuItem>
                <ModalComponent buttonName={"Edit Contact"}>
<EditContact contactId={rowId}/>
  </ModalComponent>
            </MenuItem>
            <MenuItem>
<DeleteContact contactId={rowId}/>
            </MenuItem>
            </Menu>
        </Popover>
        </MenuTrigger>
    );
}

export default ActionMenu;