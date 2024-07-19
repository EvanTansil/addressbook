import React from 'react';

const PhoneNumberInput=({formik})=>{

    return(
        <div>
    <label htmlFor='phone_number'>Phone Number</label>
<input
 name='phone_number'
 id='phone_number'
 type='tel'
 onChange={formik.handleChange}
               value={formik.values.phone_number}
               />
               </div>
)
}

export default PhoneNumberInput;