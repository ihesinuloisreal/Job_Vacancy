import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import user from '../mages/image.jpg'
import { Link } from 'react-router-dom'

const ContactCard = (props) => {
  const { id, name, email} = props.contact
  return (
    <div className='mt-3'>
    <div className='row'>
    <div  className='col-2'>
        <img className="bd-placeholder-img rounded-circle" alt='Profile' width="70" height="70" src={user}/>
    </div>
            <div className='col-8'>
            <Link to='/contact/${id}' state = {{ id,name,email }}>
               <h5>{name}</h5> 
               <p>{email}</p>
              </Link>
            </div>
            <div className='col-2'>
            <Link to='/delete/${id}' state = {{ id }}>

            <FontAwesomeIcon icon={solid('trash-can')} style={{color: "red", marginTop: "7px", cursor: "pointer"}}/>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default ContactCard