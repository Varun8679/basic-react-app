import React from 'react'

function Navigation() {
  return (
     <nav className='container'>
        <div>
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>

        <button>login</button>
      </nav>
  )
}

export default Navigation