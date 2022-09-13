import React from 'react'
import user from '../mages/image.jpg'
import { Link, useLocation } from 'react-router-dom'

const ContactDetail = () => {
    const location = useLocation();

    const {name, email} = location.state;
    // console.log("Location from new user ", location.state)
  return (
      <div className='container'>
    <div  className='card d-flex p-2' style={{width: '20rem'}}>
        <img className="card-image-top" alt='Profile'  src={user}/>
         
        <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{email}</p>
        </div>
    </div>
    <Link to="/">
    <button className='btn btn-primary'>Go back to Contact List</button>
    </Link>
    </div>
  )
}

export default ContactDetail