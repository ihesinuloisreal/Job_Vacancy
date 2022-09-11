import React, { useEffect } from 'react'
import Home from "./pages/Home";
import About from './pages/About';
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Input from './pages/Input';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  useEffect(() => {
    const Retriev = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (Retriev) setcontact(Retriev);
  })
    
  return (
    <div className='container'>
      <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="/" element={<Input/>} />
      </Routes>
      
    </div>
  );
}

export default App;
