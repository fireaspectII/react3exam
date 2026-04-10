import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

function Header({setSearchQuery,searchQuery}) {
  return (
    <section className="header">
      <h1>The Ethereal Marketplace</h1>
      <nav>
        <Link className='links-nav' to="/">Curation</Link>
        <Link className='links-nav' to="/living">Living</Link>
        <Link className='links-nav' to="/">Apparel</Link>
        <Link className='links-nav' to="/">Artisans</Link>
      </nav>
      <div className="search-btn">
        <div className="search">
          <input type="search" name="" id="" placeholder={searchQuery} onChange={(e) => setSearchQuery(e.target.value || "All")} />
          <HiOutlineSearch/>
        </div>
        <BsCart3 className='icon-head'/>
        <FaRegUser className='icon-head'/>
      </div>
    </section>
  )
}

export default Header
