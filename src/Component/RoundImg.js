import React from 'react'
import home from '../images/cc1a.jpg'


const RoundImg = ({width, height}) => {
  return (
    <>
      <img class="bd-placeholder-img rounded-circle" width={width} height={height} role="img" aria-label="Placeholder: 140x140" src={home}  preserveAspectRatio="xMidYMid slice" focusable="false"></img>
    </>
  )
}

export default RoundImg