import React, { Component } from 'react'
import Article from '../Component/Article'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import Sidebar from '../Component/Sidebar'

export class News extends Component {
  render() {
    return (
      <div>
      {/* Header */}
      <Header/>
    
      <main id="main">
    
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <div class="d-flex justify-content-between align-items-center">
              <h2>Blog</h2>
              <ol>
                <li><a href="index.html">Home</a></li>
                <li>Blog</li>
              </ol>
            </div>
    
          </div>
        </section>
    
        <section id="blog" class="blog">
          <div class="container">
    
            <div class="row">
            
    
              <div class="col-lg-8 entries">
    
                {/* Article */}
                <Article/>
    
                <div class="blog-pagination">
                  <ul class="justify-content-center">
                    <li class="disabled"><i class="icofont-rounded-left"></i></li>
                    <li><a href="#">1</a></li>
                    <li class="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#"><i class="icofont-rounded-right"></i></a></li>
                  </ul>
                </div>
    
              </div>
    
              <div class="col-lg-4">
    
                {/* Sidebar */}
                
                <Sidebar/>
    
              </div>
    
            </div>
    
          </div>
        </section>
    
      </main>
    
    
      <footer id="footer">
    
       {/* Footer */}
       <Footer/>
      </footer>
    
      <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    
    
    </div>
    )
  }
}

export default News