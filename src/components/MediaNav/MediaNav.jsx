import React from 'react'
import "./MediaNav.css"

function MediaNav(menuOpen) {
  return (
    <div>
       <nav className={menuOpen ? "nav-mobile active" : "nav-mobile"}>
              <Link className='links-nav' to="/">Curation</Link>
              <Link className='links-nav' to="/living">Living</Link>
              <Link className='links-nav' to="/">Apparel</Link>
              <Link className='links-nav' to="/">Artisans</Link>
            </nav>
    </div>
  )
}

export default MediaNav
