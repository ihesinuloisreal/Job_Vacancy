import React, {useState, useEffect} from 'react'
import { uuid } from 'uuidv4';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'
import AddContact from './Component/AddContact'
import ContactList from './Component/ContactList'
import ContactDetail from './Component/ContactDetail';
import DeleteContact from './Component/DeleteContact';
import api from './api/Contact';



function App() {

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setcontact] = useState([]);

  //retrieving contact
  const retrieveContact = async () => {
    const responce = await api.get("/contact");
    return responce.data;
  }

  const addContactHanler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    }

    const responce = await api.post("/contact", request)
    setcontact([responce.data]);
  };
  
  const removeContactHandle = (id) => {
    console.log(id)
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontact(newContactlist);
  }
  useEffect(() => {
    // const Retriev = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //   if (Retriev) setcontact(Retriev);
    const getAllContacts = async () => {
      const allContact = await retrieveContact();
      if (allContact) setcontact(allContact);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  


  return (
    <Router>

    <Header />
    <div className='container'>
      <Routes>
        
      
        <Route exact path='/' 
          element={<ContactList 
          contacts={contacts} 
          />}

        />
      
        <Route path='/add' element={<AddContact addContactHanler={addContactHanler}/>}/>
        <Route path='/contact/:id' element={<ContactDetail/>}/>
        <Route path='/delete/:id' element={<DeleteContact removeContact={removeContactHandle}/>} />
        
        </Routes>
        </div> 
        
      </Router>
    

  );
}

export default App;
