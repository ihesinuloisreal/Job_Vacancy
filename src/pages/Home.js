import React from 'react'
import home from '../images/cc1a.jpg'
import RowImgRight from '../Component/RowImgRight'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import RoundImg from '../Component/RoundImg'
import TextUnderRoundImg from '../Component/TextUnderRoundImg'


const Home = () => {
  return (
    <>
      <Header/>
        <main>

            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">  
                    <img class="bd-placeholder-img" width="100%" height="600" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" src={home}></img>
                    <div class="carousel-caption text-start">
                            
                            <h1>Example headline.</h1>
                            <p >Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                        
                    </div>
                </div>
            
            </div>

            <hr class="featurette-divider"/>

            <div class="container marketing">

                {/* <div class="row">
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
                </div> */}

                <hr class="featurette-divider"/>

                <RowImgRight width="250" height="250"/>

                <hr class="featurette-divider"/>

                <RowImgRight width="250" height="250"/>

                <hr class="featurette-divider"/>

                <RowImgRight width="250" height="250"/>

                <hr class="featurette-divider"/>

                <RowImgRight width="250" height="250"/>

                <hr class="featurette-divider"/>

                <RowImgRight width="250" height="250"/>

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

export default Home