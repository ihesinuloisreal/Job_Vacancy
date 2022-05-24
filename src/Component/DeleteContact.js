import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const DeleteContact = ({ removeContact}) => {
    const location = useLocation();
    const {id} = location.state;

    const deleteHandler = () => {
      
        removeContact(id)
       
    }
  return (
      <div className='container'>
        <h4>Do you want to delete this contact</h4>
    <Link to="/">
    <button className='btn btn-primary' onClick={() => {deleteHandler()}}>Yes</button>
    </Link>
    <Link to="/">
    <button className='btn btn-primary'>No</button>
    </Link>
    </div>
  )
}

export default DeleteContact