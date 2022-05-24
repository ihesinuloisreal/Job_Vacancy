import React, { Component, useState } from 'react';
import { useNavigate } from 'react-router-dom';

 const AddContact = ({addContactHanler}) => {
     const navigate = useNavigate();
    

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
 
   const add = (e) => {
       e.preventDefault();
       if (name === "" && email === "") {
           alert("All Fields are required");
           return
       }
       addContactHanler({name, email});
       setname("")
       setemail("")
       navigate("/")
    }
    
     return (
       <div>
            <h2>Add Contact</h2>
            <form onSubmit={add}>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' onChange={(e)=> setname(e.target.value)} type="text" value={name} name='name' placeholder='Enter Name'/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' onChange={(e)=> setemail(e.target.value)} type="email" value={email} name='name' placeholder='Enter Email Address'/>
                </div>
                <button className='btn btn-primary'>Add</button>
            </form>
       </div>
     )
   }
 export default AddContact