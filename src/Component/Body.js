import React from 'react'
import home from '../images/cc1a.jpg'
import RowImgRight from './RowImgRight'
import Footer from './Footer'
import Header from './Header'
import RoundImg from './RoundImg'
import TextUnderRoundImg from './TextUnderRoundImg'


const Body = () => {
  return (
    <>
      <Header/>
        <main>

            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="bd-placeholder-img" width="100%" height="70%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" src={home}></img>
                    
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
                            
                                <h1>Example headline.</h1>
                                <p >Some representative placeholder content for the first slide of the carousel.</p>
                                <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            <hr class="featurette-divider"/>

            <div class="container marketing">

                <div class="row">
                    <div class="col-lg-4 text-center">
                    <RoundImg width='140' height='140'/>
                    <TextUnderRoundImg/>
                    </div>
                    <div class="col-lg-4 text-center">
                    <RoundImg width='140' height='140'/>
                    <TextUnderRoundImg/>
                    </div>
                    <div class="col-lg-4 text-center">
                    <RoundImg width='140' height='140'/>
                    <TextUnderRoundImg/>
                    </div>
                </div>

                <hr class="featurette-divider"/>

                <RowImgRight/>

                <hr class="featurette-divider"/>

            </div>


            <footer class="container">
                <p class="float-end"><a href="#">Back to top</a></p>
                <p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </main>
        <Footer/>
    </>
  )
}

export default Body