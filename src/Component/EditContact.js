import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

 const EditContact = ({updateContactHanler}) => {
     const location = useLocation();
     const navigate = useNavigate();
    
  const [name, setname] = useState(location.state.name);
  const [email, setemail] = useState(location.state.email);
  const {id} = location.state;

 
   const update = (e) => {
       e.preventDefault();
       if (name === "" || email === "") {
           alert("All Fields are required");
           return
       }
       updateContactHanler({id,name, email});
       setname("")
       setemail("")
       navigate("/")
    }
    
     return (
       <div>
            <h2>Edit Contact</h2>
            <form onSubmit={update}>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' onChange={(e)=> setname(e.target.value)} type="text" value={name} name='name' placeholder='Enter Name'/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' onChange={(e)=> setemail(e.target.value)} type="email" value={email} name='name' placeholder='Enter Email Address'/>
                </div>
                <button className='btn btn-primary'>Update</button>
            </form>
       </div>
     )
   }
 export default EditContact