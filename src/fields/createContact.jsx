import React from "react";
import ContactForms from './contact-form'
import axios from 'axios';



const CreateContact=()=>{
    return(
<Formik 
    initialValues={{ 
        fullName : '',
    phone_number:'',
    street_address:'',
    job_title:'',
    email_address:'',
notes:''
    }}
    onSubmit ={ (values, {resetForm}) =>{

        try{
            const mapValues = {
                fullName:values?.fullName || '',
                phone_number:values?.phone_number || '',
                street_address:values?.street_address || '',
                job_title:values?.phone_number || '',
                email_address:values?.email_address || '',
            notes:values?.notes || ''
        }     
         
            const response= await axios.post(//backend, mapValues);
                
if(response){
           alert('Contact has been created');
        }
           resetForm()
        } catch (error){
    console.log('There was an error submiting your form', error)
          
      }

resetForm()
    }  
}
    >
<ContactForms/>
</Formik>
    )
}

export default CreateContact  