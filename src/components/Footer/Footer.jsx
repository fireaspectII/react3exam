import React from 'react'
import './Footer.css'
import { BsStars } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="footerfirst dnfooter">
        <div className="ethereal">
        <h3>The Ethereal Marketplace</h3>
        <p>© 2024 The Ethereal Marketplace. Curated with intention.</p>
      </div>
      <ul>
        <li>Sustainability</li>
        <li>Shipping</li>
        <li>Returns</li>
        <li>Privacy</li>
        <li>Journal</li>
      </ul>
      </div>
      <div className="footersecond dnfooter2">
        <div className="dnforfooter">
          <div className="curated same">
           <BsStars className='samefont'/>
           <p>Curated</p>
        </div>
        <div className="search-2 same">
          <IoMdSearch className='samefont'/>
          <p>Search</p>
        </div>
        <div className="bag same">
          <MdOutlineShoppingBag className='samefont'/>
          <p>Bag</p>
        </div>
        <div className="profile same">
          <FaRegUser className='samefont'/>
          <p>Profile</p>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
