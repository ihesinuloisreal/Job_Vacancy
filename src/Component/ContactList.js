import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = ({contacts, searchkeyword, term}) => {
    // const [searchTerm, setsearchterm] = useState("")
    const inputEl = useRef("");

    
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} ></ContactCard>
        )
    })
    const getSearch = () =>{
        // console.log(inputEl.current.value);
        searchkeyword(inputEl.current.value)
    }
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
        <div className='input-group mb-3'>
            <input ref={inputEl} type="text" className='form-control' placeholder='Search Contact' value={term} onChange={getSearch}/>
        </div>


            {renderContactList.length > 0 ? renderContactList : "No record found" }
        </div>
    )
  
}

export default ContactList