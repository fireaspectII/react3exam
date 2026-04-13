import React, { useEffect, useState } from 'react'
import "./Home.css"
import data from './data.json'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
       <div className="hero">
        
         <p className='zindex-5 zinde-7'>Volume I: The Spring Edit</p>
         <p className='zindex-6'>Sustainable Living</p>
        <span className='zindex-5 zindex-8'><h2 className='first-h2'>Curated Living for the</h2><h2 className='second-h2'>Modern Home</h2></span>
        <div className="btn-home zindex-5" >
            <button className='btn-black'>Explore Collections</button>
            <button className='btn-white'>The Artisan Story</button>
        </div>
       </div>
       <div className="home-product">
        <div className="head-product">
             <div className="texts-left">
                <p>Editor's Choice</p>
                <h3>New Arrivals</h3>
             </div>
             <div className="texts-right">
                <p>Showing 12 of 48 curated pieces</p>
             </div>
        </div>
        <div className="products-home">
            {
                data.map(item  =>(
                    <Link to={`/product/${item.id}`} className="enter-product" key={item.id}>
                       <img src={item.image} alt={item.name} />
                       <div className="sec-product">
                        <div className="line-first"><div className="name">{item.name}</div> <div className="price">${item.price}</div></div>
                       <p className='des-product'>{item.description}</p>
                       <p className='detal'>View Details →</p>
                       </div>
                    </Link>
                )
            )
            }
        </div>
        <div className="button-time">
            <button>Discover More Creations</button>
        </div>
       </div>
          <div className="newslatter">
            <button className='newsbtn'>Newsletter</button>
            <h2>Join The Curation</h2>
            <p>Receive bi-monthly journals on minimalist living, artisan profiles, and early</p>
            <p>access to new collections.</p>
            <div className="btn-newslatter">
                <input type="email" name="" id="" placeholder='Enter your email'/>
                <button>Subscribe</button>
            </div>
            <span>Inspired by intention. Never spam.</span>
        </div>
        <div className="journal">
            <p>Journal</p>
            <h2>The Art of Intentional Living</h2>
            <span>Explore our latest editorial on creating
spaces that breathe and inspire.</span>
            <button>Read Journal</button>
        </div>
    </section>
  )
}

export default Home
