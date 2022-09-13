import React from 'react'

function Sidebar() {
  return (
    <>
      <div class="sidebar" data-aos="fade-left">
  
        <h3 class="sidebar-title">Search</h3>
        <div class="sidebar-item search-form">
          <form action="">
            <input type="text"/>
            <button type="submit"><i class="icofont-search"></i></button>
          </form>

        </div>

        <h3 class="sidebar-title">Categories</h3>
        <div class="sidebar-item categories">
          <ul>
            <li><a href="#">General <span>(25)</span></a></li>
            <li><a href="#">Lifestyle <span>(12)</span></a></li>
            <li><a href="#">Travel <span>(5)</span></a></li>
          </ul>

        </div>

        <h3 class="sidebar-title">Recent Posts</h3>
        <div class="sidebar-item recent-posts">
          <div class="post-item clearfix">
            <img src="assets/img/blog-recent-posts-1.jpg" alt=""/>
            <h4><a href="blog-single.html">Nihil blanditiis at in nihil autem</a></h4>
            <time datetime="2020-01-01">Jan 1, 2020</time>
          </div>


          <div class="post-item clearfix">
            <img src="assets/img/blog-recent-posts-5.jpg" alt=""/>
            <h4><a href="blog-single.html">Et dolores corrupti quae illo quod dolor</a></h4>
            <time datetime="2020-01-01">Jan 1, 2020</time>
          </div>

        </div>

        <h3 class="sidebar-title">Tags</h3>
        <div class="sidebar-item tags">
          <ul>
            <li><a href="#">App</a></li>
            <li><a href="#">IT</a></li>
            <li><a href="#">Business</a></li>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Sidebar