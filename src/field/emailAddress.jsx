import react from 'react';


const EmailAddressInput=({formik})=>{

    return(
        <div>
    <label htmlFor='email_address'>Email</label>
<input
 name="email"
 id='email_address'
 type='email'
 onChange={formik.handleChange}
               value={formik.values.email_address}
               />
               </div>
)
};

export default EmailAddressInput;