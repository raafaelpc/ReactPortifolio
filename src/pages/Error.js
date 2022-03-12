import React from 'react'
import {BiError} from 'react-icons/bi'

function Error() {
  return (
   
    <div className='error'>
      
        <div className='error--name'>
         <div className='icon--error'><BiError/> </div>
        <h1>Error 404. Page Not Found</h1>
        </div>
    </div>    
  
  )
}

export default Error;