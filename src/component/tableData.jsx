import React,  {useEffect, useState} from 'react' 
import axios from 'axios'
import ActionMenu from '../actions/actionMenu';

function TableContent(){
    
    const [contacts, setContacts] = useState(null); 
const [tableError, SetTableError] =useState(null);
    useEffect(()=>{
        const fetchData= async  ()=>{
try{
            const res = await axios.get(); //brando's backend database goes here
setContacts(res?.data);
        }catch(error){
              
SetTableError(error.message)
    }
}    
fetchData()
},[])
if(tableError){
return <tr role="row"><th scope="colspan" colespan="7" >Trouble loading contacts?</th></tr>;
}

if(!contacts){
    return(
        <tr role="row" id="noContacts">
             <th scope="row" role="rowheader" aria-colindex={1}>You have no contact information saved. Please add contacts.</th>
             <td aria-colindex={2} role="cell">Add phone number.</td>
             <td aria-colindex={3}  role="cell">Add street address.</td>
             <td aria-colindex={4} role="cell">Add job title</td>
             <td aria-colindex={5} role="cell"> Add email.</td>
             <td aria-colindex={6} role="cell">No new notes. Please add notes.</td>
             <td aria-colindex={7} role="cell">
                <button type="button">Action</button>
                </td>
                  </tr> 
     )
}

  
const contactData = contacts?.map((contact)=>{
        return(
        <tr role="row" key={contact?.id}>
             <th scope="row" role="rowheader" aria-colindex={1}>{contact?.fullName}</th>
             <td aria-colindex={2} role="cell">{contact?.phone_number}</td>
             <td aria-colindex={3}  role="cell">{contact?.street_address}</td>
             <td aria-colindex={4} role="cell">{contact.job_title}</td>
             <td aria-colindex={5} role="cell">{contact.email_address}</td>
             <td aria-colindex={6} role="cell">{contact.notes}</td>
             <td aria-colindex={7} role="cell"><ActionMenu rowId={contact?.id}/></td>
                  </tr> 
     )
     }
     );
      
    return(
<div>
{contactData}

</div>
    )
}


export default TableContent; 