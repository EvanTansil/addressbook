import React from 'react';
import TableComponent from "./component/table.jsx";
import ModalComponent from './modal/modal.jsx';
import CreateContact from './fields/createContact.jsx';

function App() {
  
  return (
    <>
<h1>Address Book </h1>
<ModalComponent buttonName={"Add New Contact"}>
<CreateContact />
  </ModalComponent>

<TableComponent/>
  </>
  )
}

export default App
