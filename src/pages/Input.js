import React, { useState } from 'react'


const Input = () => {
    const [name, setname] = useState("");
    const add = (e) =>{
        console.log(name)
        e.preventDefault();
    }
  return (
    <div>
        <div className='row'>
        <div className='col-3'>
                <form onSubmit={add}>
                    <input type='text' onChange={e => setname(e.target.value)} />
                    <button className='btn btn-primary'>Input a Name</button>
                </form>
                
            </div>
            <div className='col-7'>
                <h3>Output of inputed Names</h3>
            </div>

            
        </div>

    </div>
  )
}

export default Input