import { Link } from 'react-router-dom'
import "./MediaNav.css"

function MediaNav({ menuOpen }) {
  return (
    <div>
       <nav className='nav-mobile' style={{ display: menuOpen ? "block" : "none" }}>
              <Link className='links-nav' to="/">Curation</Link>
              <Link className='links-nav' to="/living">Living</Link>
              <Link className='links-nav' to="/">Apparel</Link>
              <Link className='links-nav' to="/">Artisans</Link>
            </nav>
    </div>
  )
}

export default MediaNav
