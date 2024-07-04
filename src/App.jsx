import React from 'react';
import TableComponent from "./component/table.jsx";
import ContactFormInputs from './field/contact-form.jsx';
import ModalComponent from './modal/modal.jsx';

function App() {
  
  return (
    <>
<h1>Address Book </h1>
<ModalComponent buttonName={"Add New Contact"}>
<ContactFormInputs />
  </ModalComponent>

<TableComponent/>
  </>
  )
}

export default App
