import React from 'react';
import {Formik, Form, useFormikContext} from 'formik';
import axios from 'axios';

const ContactTextField=({label, name,inputType})=>{
    const{values, handleChange} = useFormikContext();
    
    return(
        <div>
        <label htmlFor={name}>{label} </label>
            <input
             id={name}
             name={name}
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
        alert(JSON.stringify(values, null, 6)); //Testing form submition
resetForm()
    }  
}
    >
        
    <Form> {/* Will handle form submit later */}
            <h1>Add a new contact</h1>
            <ContactTextField
             name="fullName"
             inputType="text"
               label="Full Name: "
               />
<ContactTextField
 name="phone_number"
 inputType="tel"
 label="Phone Number: "
/>
<ContactTextField
name="street_address"
inputType="text"
label="Street Address: "
/>
               
<ContactTextField
name="job_title"
inputType="text"
label="Job Title: "
/>
<ContactTextField
 name="email_address"
 inputType="email"
 label="Email Address: "
/>  
<ContactTextField
name="notes"
inputType="text"
               label="Notes: "
/>
<button type="submit">Save Contact</button>
    </Form>
    </Formik>
    </div>
);
};

export default ContactFormInputs; 