import React from 'react';
import {Formik, Field, Form, useFormikContext} from 'formik';


const ContactForms=()=>{

    return(
        <div>
        
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
    </div>
);
};

export default ContactForms; 