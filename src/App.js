import React, {useState, useEffect} from 'react'
import { uuid } from 'uuidv4';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header'
import AddContact from './Component/AddContact'
import ContactList from './Component/ContactList'
import ContactDetail from './Component/ContactDetail';
import DeleteContact from './Component/DeleteContact';
import api from './api/Contact';
import EditContact from './Component/EditContact';



function App() {

  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setcontact] = useState([]);
  const [searchTerm, setsearchterm] = useState("")
  const [searchResult, setsearchResult] = useState("")

  //retrieving contact
  const retrieveContact = async () => {
    const responce = await api.get("/contact");
    return responce.data;
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

  const addContactHanler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    }

    const responce = await api.post("/contact", request)
    setcontact([responce.data]);
  };

  const updateContactHanler = async (contact) => {
    const responce = await api.put(`./contact/${contact.id}`,contact);
    const {id} = responce.data;
    setcontact(contacts.map((contact) => {
      return contact.id === id ? {...responce.data} : contact 
    }))
    // console.log(responce)
  }
  
  const removeContactHandle = async (id) => {
    await api.delete(`/contact/${id}`)
    console.log(id)
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setcontact(newContactlist);
  }
  

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


  const searchHandler = (searchTerm) => {
    setsearchterm(searchTerm)
    if (searchTerm !== ""){
      const newContactList = contacts.filter((contact) => {
       return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase());
      })
      setsearchResult(newContactList);
    }
    else{
      setsearchResult(contacts);
    }
  }
  


  return (
    <Router>

    <Header />
    <div className='container'>
      <Routes>
        
      
        <Route exact path='/' 
          element={<ContactList 
          contacts={searchTerm.length < 1 ? contacts : searchResult}
          term={searchTerm} 
          searchkeyword = {searchHandler}
          />}

        />
      
        <Route path='/add' element={<AddContact addContactHanler={addContactHanler}/>}/>
        <Route path='/contact/:id' element={<ContactDetail/>}/>
        <Route path='/delete/:id' element={<DeleteContact removeContact={removeContactHandle}/>} />
        <Route path='/edit/:id' element={<EditContact updateContactHanler={updateContactHanler}/>} />
        
        </Routes>
        </div> 
        
      </Router>
    

  );
}

export default App;
