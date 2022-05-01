import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({text, to}) => {
  return (
    <div>
      <Link className="nav-item" to={to}>{text}</Link>
    </div>
  )
}

export default Li