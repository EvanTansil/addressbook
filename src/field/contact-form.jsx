import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios';

const ContactFormWrapper=()=>{
useFormik({
    initialValues:{
        Name: '',
        PhoneNumber:'',
        StreetAddress:'',
        JobTitle:'',
        EmailAddress:'',
Notes:''
    },
    onSubmit:async(value)=>{
try{
        const response = await axios.post(//brandos backend, value);
        response.data
        } catch (error) {
  console.error('There was an error submiting your form', error)
        }
    }
});
return(
    <form onSubmit={Formik.handleSubmit}>

    </form>
)
};