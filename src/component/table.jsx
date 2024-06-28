import React from 'react'
import TableContent from './tableData.jsx'

function TableComponent(){
    return(
        <div>
<table role='table'>
<thead>
<tr role="row">
    <th scope="col" role="columnheader" aria-colindex={1}>Name</th><th scope="col" role="columnheader" aria-colindex={2}>Phone Number</th><th scope="col" role="columnheader" aria-colindex={3}>Street Address</th><th scope="col" role="columnheader" aria-colindex={4}>Job Title</th><th scope="col" role="columnheader" aria-colindex={5}>Email</th><th scope="col" role="columnheader" aria-colindex={6}>Contact Notes</th><th scope="col" role="columnheader" aria-colindex={7}>Edit/Delete Options</th>
    </tr>
</thead>    
<tbody>
    <TableContent/>
    </tbody>
</table>
</div>
    )
};

export default TableComponent 