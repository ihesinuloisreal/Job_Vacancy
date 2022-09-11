import React from 'react'
import home from '../images/cc1a.jpg'


const RowImgRight = ({width,height}) => {
  return (
    <>
        <div class="row featurette">
                    <div class="col-md-9">
                    <h2 class="featurette-heading">First featurette heading.</h2>
                    <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div class="col-md-3">
                    <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={width} height={height} src={home}></img>

                    </div>
                </div>
    </>
  )
}

export default RowImgRight