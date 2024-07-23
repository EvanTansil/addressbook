import React, {useEffect,useState} from 'react';
import {Formik} from 'formik';
import ContactForms from './contact-form';
import axios from 'axios';



const EditContact=({contactId})=>{
const [formError, setFormError] = useState('');

    const [formInitialValues, SetFormInitialValues]= useState({
    fullName:'',
    phone_number:'',
    street_address:'',
    job_title:'',
    email_address:'',
notes:''
});    
    useEffect(()=>{
        const fetchData=async()=>{
             try{
                const res = await axios.get(`//url,${contactId}`)
            SetFormInitialValues({
                fullName:res?.data?.fullName || '',
                phone_number:res?.data?.phone_number || '',
                street_address:res?.data?.street_address || '',
                job_title:res?.data?.phone_number || '',
                email_address:res?.data?.email_address || '',
            notes:res?.data?.notes || ''        
            }); //set the value of all the fetch data. For each property. 
        
        }catch(error){
setFormError(error.message)
     }
fetchData();
    }
    },[]);
    
    return(
<Formik 
    initialValues={{formInitialValues       } }
    onSubmit ={ async (values) =>{
try{
    const mapValues = {
        fullName:values?.fullName || '',
        phone_number:values?.phone_number || '',
        street_address:values?.street_address || '',
        job_title:values?.phone_number || '',
        email_address:values?.email_address || '',
    notes:values?.notes || ''
}     
 
             await axios.patch(`// backend database${contactId}`,mapValues)

        
    } catch(error){
        setFormError(error.res?.data?.message || 'An error occurred while editting the contact');
    }
    }   
    }
>
<ContactForms/>
</Formik>
    )
}


export default EditContact;