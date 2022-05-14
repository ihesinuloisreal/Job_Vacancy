import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts, getContactId}) => {

    
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} removeContact={getContactId} ></ContactCard>
        )
    })
    return (
      
        <div>
            {renderContactList}
        </div>
    )
  
}

export default ContactList