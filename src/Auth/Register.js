import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");

    async function postContent(e) {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:3006/news',{
            //     category,
            //     headling,
            //     sebhead,
            //     contect
            // })
            console.log(name);
            console.log(email);
            console.log(username);
            console.log(password);
            console.log(password1);
            setName("");
            setEmail("");
            setUsername("");
            setPassword("");
            setPassword1("");
            console.log("Succefull");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div class="container d-flex flex-column justify-content-between vh-100">
          <div class="row justify-content-center mt-5">
            <div class="col-xl-5 col-lg-6 col-md-10">
              <div class="card">
                
                <div class="card-body p-5">
                <div class="card-header bg-primary">
                  <div class="app-brand bg-primary">
                      <span class="brand-name"><h4 className='bg-primary'>Sign Up</h4></span>
                  </div>
                </div>
                  <br/>
                  <form onSubmit={postContent}>
                    <div class="row">
                      <div class="form-group col-md-12 mb-4">
                        <input type="text" class="form-control input-lg" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                      </div>
                      <div class="form-group col-md-12 mb-4">
                        <input type="email" class="form-control input-lg" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
                      </div>
                      <div class="form-group col-md-12 mb-4">
                        <input type="text" class="form-control input-lg" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                      </div>
                      <div class="form-group col-md-12 ">
                        <input type="password" class="form-control input-lg" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                      </div>
                      <div class="form-group col-md-12 ">
                        <input type="password" class="form-control input-lg" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder="Confirm Password"/>
                      </div>
                      <div class="col-md-12">
                        <div class="d-inline-block mr-3">
                          <label class="control control-checkbox">
                            <input type="checkbox" />
                            <div class="control-indicator"></div>
                            I Agree the terms and conditions
                          </label>
                    
                        </div>
                        <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">Sign Up</button>
                        <p>Already have an account?
                          <a class="text-blue" href="login"> Sign in</a>
                        </p>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
export default Register