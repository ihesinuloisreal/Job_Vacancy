import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {

    
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} ></ContactCard>
        )
    })
    return (
      
        <div>
        <div className='row'>
            <div className='col-8'>
                <h2>Contact List</h2>
            </div>
            <div className='col-4'>
            <Link to="/add">
                <button className='btn btn-primary'>Add Contact</button>
            </Link>
            </div>
        </div>

            {renderContactList}
        </div>
    )
  
}

export default ContactList