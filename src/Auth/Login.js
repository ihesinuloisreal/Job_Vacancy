import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function postContent(e) {
        e.preventDefault();
        try {
            // await axios.post('http://localhost:3006/news',{
            //     category,
            //     headling,
            //     sebhead,
            //     contect
            // })
            console.log(email);
            console.log(password);
            setEmail("");
            setPassword("");
            // console.log("Succefull");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div class="container d-flex flex-column justify-content-between vh-100">
      <div class="row justify-content-center mt-5">
        <div class="col-xl-5 col-lg-6 col-md-10">
          <div class="card">
            <div class="card-header bg-primary">
              <div class="app-brand">
                <span class="brand-name">Welcome!</span>
              </div>
            </div>
            
            
            <div class="card-body p-5"> 
            <div className="container d-flex align-items-center">
                <h4><a href='' className="twitter"><i className="icofont-twitter"></i></a></h4> 
                <h4><a href='' className="facebook"><i className="icofont-facebook"></i></a></h4>
                <h4><a href='' className="instagram"><i className="icofont-instagram"></i></a></h4>
                <h4><a href='' className="linkedin"><i className="icofont-linkedin"></i></a></h4>
              
            </div>

              <h4 class="text-dark mb-5">Sign In</h4>
              
              <form onSubmit={postContent}>
                <div class="row">
                  <div class="form-group col-md-12 mb-4">
                    <input type="email" class="form-control input-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username"/>
                  </div>
                  <div class="form-group col-md-12 ">
                    <input type="password" class="form-control input-lg" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                  </div>
                  <div class="col-md-12">
                    <div class="d-flex my-2 justify-content-between">
                      <div class="d-inline-block mr-3">
                        <label class="control control-checkbox">Remember me
                          <input type="checkbox" />
                          <div class="control-indicator"></div>
                        </label>
                
                      </div>
                      <p><a class="text-blue" href="#">Forgot Your Password?</a></p>
                    </div>
                    <button type="submit" class="btn btn-lg btn-primary btn-block mb-4">Sign In</button>
                    <p>Don't have an account yet ?
                      <a class="text-blue" href="register"> Sign Up</a>
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

export default Login