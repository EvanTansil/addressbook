import react from 'react';
import {useFormikContext} from 'formik';

const EmailAddressInput=({name, label, inputType})=>{
const{values, handleChange} = useFormikContext();
    return(
        <div>
    <label htmlFor={name}>{label}</label>
<input
 name={name}
 id={name}
 type={InputType}
 onChange={handleChange}
               value={values[name]}
               />
               </div>
)
};

export default EmailAddressInput;