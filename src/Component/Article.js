import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

function Article() {
  const [post, setpost] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3006/news').then(function (response) {
      const all = response.data;
      setpost(all);
      console.log(all)
    }).catch (error => {
      console.log(error)
    })
  }, [])

  if (post.length > 0) {

  return (
    <>
  {
     post.length ?
    post.map((posts) => (
    
    <article class="entry" data-aos="fade-up" key={posts.id}>
    
    <div class="entry-img">
      <img src="assets/img/blog-1.jpg" alt="" class="img-fluid"/>
    </div>
    
    <h2 class="entry-title">
      <a href="blog-single.html">{posts.headling}</a>
    </h2>


    <div class="entry-content">
      <p>{posts.sebhead}</p>

      <div class="entry-meta">
      <ul>
        <li class="d-flex align-items-center"><i class="icofont-user"></i> <a href="blog-single.html">John Doe</a></li>
        <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
        <li class="d-flex align-items-center"><i class="icofont-comment"></i> <a href="blog-single.html">12 Comments</a></li>
      </ul>
    </div>
      <div class="read-more">
      

      <a href='News_view'>Read More</a>
      </div>
    </div>

  </article>
  
    )
  ): null
    }
    </>
  )}
  else{
    return <h3> No record Found</h3>
  }
  // }
}

export default Article