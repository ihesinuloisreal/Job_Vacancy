import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({text, to}) => {
  return (
    <div>
      

        <li class="nav-item">
          <Link className="nav-link" to={to}>{text}</Link>
          
        </li>
    </div>
  )
}

export default Li