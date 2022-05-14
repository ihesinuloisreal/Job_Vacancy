import React, { Component } from 'react'
 
 export class AddContact extends Component {
   state = {
       name:"",
       email:""
   };
   add = (e) => {
       e.preventDefault();
       if (this.state.name === "" && this.state.email === "") {
           alert("All Fields are required");
           return
       }
       this.props.addContactHanler(this.state);
       this.setState({name: "", email: ""})
   }
    render() {
     return (
       <div>
            <h2>Add Contact</h2>
            <form onSubmit={this.add}>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' onChange={(e)=> this.setState({name: e.target.value})} type="text" value={this.state.name} name='name' placeholder='Enter Name'/>
                </div>

                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' onChange={(e)=> this.setState({email: e.target.value})} type="email" value={this.state.email} name='name' placeholder='Enter Email Address'/>
                </div>
                <button className='btn btn-primary'>Add</button>
            </form>
       </div>
     )
   }
 }
 
 export default AddContact