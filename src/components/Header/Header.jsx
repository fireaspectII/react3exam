import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { HiOutlineSearch } from "react-icons/hi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

function Header({setSearchQuery,searchQuery,}) {

  return (
    <section className="header">
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <IoMenu/>
      </div>
      <h1>The Ethereal Marketplace</h1>
      <h2>The Curator</h2>
      <nav className='nav'>
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
