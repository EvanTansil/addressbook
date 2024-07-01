import React from 'react';
import TableComponent from "./component/table.jsx";
import ContactFormInputs from './field/contact-form.jsx';
import Modal from './modal/modal.jsx';

function App() {
  
  return (
    <>
<h1>Address Book </h1>
<Modal buttonName={"Add New Contact"}>
<ContactFormInputs />
  </Modal>

<TableComponent/>
  </>
  )
}

export default App
