import React from 'react'
import './App.css'
import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Categories from './pages/Categories/Categories'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Carousel from './pages/Home/Carousel'

function App() {
  const [searchQuery, setSearchQuery] = useState("All");
  return (
    <section className="container">
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/living' element={<Categories searchQuery={searchQuery}/>}/>
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/carousel' element={<Carousel/>}/>
      </Routes>
      <Footer />
    </section>
  )
}
export default App