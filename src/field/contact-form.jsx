import React from 'react';
import {Formik, Field, Form, useFormikContext} from 'formik';
import axios from 'axios';

const ContactTextField=({label, name,inputType})=>{
    const{values, handleChange} = useFormikContext();
    
    return(
        <div>
        <label htmlFor={name}>{label} </label>
            <input
             id={name}
             name={name}
             tabIndex={-1}
             type={inputType}
             value={values[name]}
            onChange={handleChange}
                />
               </div>
    );
};

const ContactFormInputs=()=>{

    return(
        <div>
<Formik 
    initialValues={{
        fullName:'',
        phone_number:'',
        street_address:'',
        job_title:'',
        email_address:'',
notes:''
}}
    onSubmit ={ (values, {resetForm}) =>{
        alert(JSON.stringify(values, null, 6)); //Testing form submition got back to commit message notepad file to copy the axios data
resetForm()
    }  
}
    >
        
    <Form> {/* Will handle form submit later */}
            <h1>Add a new contact</h1>
            <label htmlFor="fullName">Full Name: </label>
            <Field
             name="fullName"
             type="text"
               id="fullName"
               />
               <label htmlFor="phone_number">Phone Number: </label>
<Field
 name="phone_number"
 type="tel"
 id="phone_number"
 />
<label htmlFor="street_address">Street Address:  </label>
<Field
name="street_address"
type="text"
id="street_address"
/>
              <label htmlFor="job_title">Job Title: </label> 
<Field
name="job_title"
id="job_title"
type="text"
/>
<label htmlFor="email_address">Email Address: </label>
<Field
 name="email_address"
 type="email"
 id="email_address"
 />
<label htmlFor="notes">Notes: </label>  
<Field
name="notes"
type="text"
               id="notes"
/>
<button type="submit">Save Contact</button>
    </Form>
    </Formik>
    </div>
);
};

export default ContactFormInputs; 