
import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Create_post from './Admin/Create_post';
import Input from './pages/Input';
import Home from './User/Home';
import News from './User/News';
import News_View from './User/News_View';


function App() {
  
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/News" element={<News/>} />
          <Route path="/News_View" element={<News_View/>} />
          <Route path="/Admin/Create_post" element={<Create_post/>} />


      </Routes>
      
    </div>
  );
}

export default App;
