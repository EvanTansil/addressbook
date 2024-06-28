import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import PhoneNumberInput from './phoneNumber';
import EmailAddressInput from './emailAddress';

const ContactFormInputs=()=>{
const formik = useFormik({
    initialValues:{
        name: '',
        phone_number:'',
        street_address:'',
        job_title:'',
        email_address:'',
notes:'',
    },
    onSubmit :  async (values, {resetForm}) =>{
        try{
            const response= await axios.post();
           console.log(response?.data);
resetForm()
        } catch (error){
    console.log('There was an error submiting your form', error)
          
      }
  
},
});
return(
    <div>
    <form onSubmit={formik.handleSubmit}>
            <h1>Add a new contact</h1>
            <label htmlFor='name'>Name </label>
            <input
             id="name"
             name="name"
             type="text"
              onChange={formik.handleChange}
               value={formik.values?.name}/>
<PhoneNumberInput formik={formik}/>
<label htmlFor="street_address">Street Address</label>
<input
id="street_address"
name="street_address"
type="text"
onChange={formik.handleChange}
               value={formik.values?.street_address}
/>
<label htmlFor="job_title">Job Title</label>
<input
id="job_title"
name="job_title"
type="text"
onChange={formik.handleChange}
               value={formik.values?.job_title}
/>
<EmailAddressInput formik={formik}/>
<label htmlFor="notes">Notes</label>
<input
id="notes"
name="notes"
type="text"
onChange={formik.handleChange}
               value={formik.values?.notes}

/>
<button type="submit">Save Contact</button>
    </form>
    </div>
)
};

export default ContactFormInputs; 