import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import user from '../mages/image.jpg'


const ContactCard = ({contact, removeContact}) => {
  return (
    <div className='mt-3'>
    <div className='row'>
    <div  className='col-2'>
        <img className="bd-placeholder-img rounded-circle" alt='Profile' width="70" height="70" src={user}/>
    </div>
            <div className='col-8'>
               <h5>{contact.name}</h5> 
               <p>{contact.email}</p>
            </div>
            <div className='col-2'>
            <FontAwesomeIcon icon={solid('trash-can')} style={{color: "red", marginTop: "7px", cursor: "pointer"}}
                onClick={() => removeContact(contact.id)}
            />
          </div>
      </div>
    </div>
  )
}

export default ContactCard