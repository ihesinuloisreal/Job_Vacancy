import React, {useState, useEffect} from 'react'
import { uuid } from 'uuidv4';
import Header from './Component/Header'
import AddContact from './Component/AddContact'
import ContactList from './Component/ContactList'


function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts,setcontact] = useState([]);

  const addContactHanler = (contact) => {
    setcontact([...contacts,{id: uuid(), ...contact}]);
  };
  
  const removeContactHandle = (id) => {
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontact(newContactlist);
  }
  useEffect(() => {
    const Retriev = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (Retriev) setcontact(Retriev);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  


  return (
    <div>
      <div className='container d-flex justify-content-center mt-4'>
      <Header />
      </div>
      <div className='container'>
      <AddContact addContactHanler={addContactHanler}/>
      <div className='mt-3'>
      <ContactList contacts={contacts} getContactId={removeContactHandle}/>
      </div>
      </div>
      
    </div>
    
  );
}

export default App;
