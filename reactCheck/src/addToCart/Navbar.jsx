import React from 'react'

function Navbar() {
  return (
    <div>
      <ul style={{display:'flex',gap:20}}>
        <li>
            home 
        </li>
        <li>
            about 
        </li>
        <li>
            blog 
        </li>
        <span><i className="fa-solid fa-cart-shopping"></i></span>
      </ul>
     
    </div>
  )
}

export default Navbar
