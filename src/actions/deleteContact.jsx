import React, {useState} from 'react'
import axios from 'axios'
 


const DeleteContact = ({ contactId }) => {
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleDelete = async () => {
    try {
    const res = await axios.delete(`//backend url ${contactId}`);
    if (res.status === 200) {
    alert("Contact successfully deleted");
    }
} catch (error) {
    setErrorMessage(error.res?.data?.message || 'An error occurred while deleting the contact');
  }};
    
    return (
    <div>
    <button onClick={handleDelete}>Delete Contact</button>
    {errorMessage && <p >{errorMessage}</p>}
    </div>
    );
    };
    
    export default DeleteContact;