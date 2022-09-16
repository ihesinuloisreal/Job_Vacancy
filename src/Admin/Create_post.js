import axios from 'axios';
import React, { useState } from 'react'

const Create_post = () => {
    const [category, setCategory] = useState("");
    const [headling, setHeadling] = useState("");
    const [contect, setContent] = useState("");
    const [sebhead, setsubhead] = useState("");

    async function postContent(e) {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3006/news',{
                category,
                headling,
                sebhead,
                contect
            })
            setCategory("");
            setContent("");
            setHeadling("");
            setsubhead("");
            console.log("Succefull");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <div className='class="header-fixed sidebarr-fixed sidebarr-dark header-light"'>
        <div class="mobile-sticky-body-overlay"></div>

        <div class="wrapper">
    
            <aside class="left-sidebarr bg-sidebarr">
                <div id="sidebarr" class="sidebarr sidebarr-with-footer">
                    <div class="app-brand">
                        <a href="/index.html">
            
                            <span class="brand-name">Dashboard</span>
                        </a> 
                    </div> 
                    <div class="sidebarr-scrollbar">

                        <ul class="nav sidebarr-inner" id="sidebarr-menu">
                            

                            
                            <li  class="has-sub" >
                                <a href='' class="sidenav-item-link"  
                                aria-expanded="false" aria-controls="dashboard">
                                <i class="mdi mdi-view-dashboard-outline"></i>
                                <span class="nav-text">Dashboard</span> <b class="caret"></b>
                                </a>
                                
                            </li>
                            <li  class="has-sub active expand" >
                                <a href='Create_post' class="sidenav-item-link"  
                                aria-expanded="false" aria-controls="ui-elements">
                                <i class="mdi mdi-folder-multiple-outline"></i>
                                <span class="nav-text">Create News</span> <b class="caret"></b>
                                </a>
                                
                                </li>
                           
                            
                           
                            <li  class="has-sub" >
                                <a href='' class="sidenav-item-link" 
                                aria-expanded="false" aria-controls="documentation">
                                <i class="mdi mdi-book-open-page-variant"></i>
                                <span class="nav-text">Documentation</span> <b class="caret"></b>
                                </a>
                                
                            </li>
                            

                            
                        </ul>

                    </div> 

                    <hr class="separator" />
                </div>
            </aside>

    

            <div class="page-wrapper">
                <header class="main-header " id="header">
                    <nav class="navbar navbar-static-top navbar-expand-lg">
                    <button id="sidebarr-toggler" class="sidebarr-toggle">
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                    <div class="search-form d-none d-lg-inline-block">
                        <div class="input-group">
                        <button type="button" name="search" id="search-btn" class="btn btn-flat">
                            <i class="mdi mdi-magnify"></i>
                        </button>
                        <input type="text" name="query" id="search-input" class="form-control" placeholder="'button', 'chart' etc."
                            autofocus autocomplete="off" />
                        </div>
                        <div id="search-results-container">
                        <ul id="search-results"></ul>
                        </div>
                    </div>

                        <div class="navbar-right ">
                            <ul>
                                <li class="dropdown notifications-menu">
                                    <button class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="mdi mdi-bell-outline"></i>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                        <li class="dropdown-header">You have 5 notifications</li>
                                        <li>
                                            <a href="#">
                                            <i class="mdi mdi-account-plus"></i> New user registered
                                            <span class=" font-size-12 d-inline-block float-right"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i class="mdi mdi-account-remove"></i> User deleted
                                            <span class=" font-size-12 d-inline-block float-right"><i class="mdi mdi-clock-outline"></i> 07 AM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i class="mdi mdi-chart-areaspline"></i> Sales report is ready
                                            <span class=" font-size-12 d-inline-block float-right"><i class="mdi mdi-clock-outline"></i> 12 PM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i class="mdi mdi-account-supervisor"></i> New client
                                            <span class=" font-size-12 d-inline-block float-right"><i class="mdi mdi-clock-outline"></i> 10 AM</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <i class="mdi mdi-server-network-off"></i> Server overloaded
                                            <span class=" font-size-12 d-inline-block float-right"><i class="mdi mdi-clock-outline"></i> 05 AM</span>
                                            </a>
                                        </li>
                                        <li class="dropdown-footer">
                                            <a class="text-center" href="#"> View All </a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown user-menu">
                                    <button href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <img src="assets/img/user/user.png" class="user-image" alt="User Image" />
                                    <span class="d-none d-lg-inline-block">Abdus Salam</span>
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-right">
                                    <li class="dropdown-header">
                                        <img src="assets/img/user/user.png" class="img-circle" alt="User Image" />
                                        <div class="d-inline-block">
                                        Abdus Salam <small class="pt-1">abdus@gmail.com</small>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="profile.html">
                                        <i class="mdi mdi-account"></i> My Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="email-inbox.html">
                                        <i class="mdi mdi-email"></i> Message
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i class="mdi mdi-diamond-stone"></i> Projects </a>
                                    </li>
                                    <li>
                                        <a href="#"> <i class="mdi mdi-settings"></i> Account Setting </a>
                                    </li>

                                    <li class="dropdown-footer">
                                        <a href="signin.html"> <i class="mdi mdi-logout"></i> Log Out </a>
                                    </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>


                </header>


                <div class="container content-wrapper">
                    <div class="card card-default">
                        <div class="card-header card-header-border-bottom">
                            <h2>Write News</h2>
                        </div>
                        <div class="card-body">
                            <form onSubmit={postContent}>
                                <div class="form-group">
                                    <label>News Type</label>
                                    <select class="form-control" value = {category} onChange={(e) => setCategory(e.target.value)} id="">
                                        <option defaultChecked selected>Choose news Category</option>
                                        <option>National Sport</option>
                                        <option>International Sport</option>
                                        <option>National Politics</option>
                                        <option>international Politics</option>
                                        <option>National Entertainment</option>
                                        <option>International Entertainment</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label >News Headline</label>
                                    <input type="text" className="form-control" value = {headling} onChange={(e) => setHeadling(e.target.value)}  id="" placeholder="Your Headline should be captivating"/>
                                </div>

                                <div class="form-group">
                                    <label >Sub Headline</label>
                                    <input type="text" className="form-control" value = {sebhead} onChange={(e) => setsubhead(e.target.value)}  id="" placeholder="Your Headline should be captivating"/>
                                </div>
                                                                
                                <div class="form-group">
                                    <label>News Body</label>
                                    <textarea class="form-control" value = {contect} onChange={(e) => setContent(e.target.value)} id="" rows="3"></textarea>
                                </div>
                                {/* <div class="form-group">
                                    <label for="exampleFormControlFile1">Upload Image</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                </div> */}
                                <div class="form-footer pt-4 pt-5 mt-4 border-top">
                                    <button type="submit" class="btn btn-primary btn-default">Submit</button>
                                    <button type="submit" class="btn btn-secondary btn-default">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div> 
        </div>

    </>
  )
}

export default Create_post