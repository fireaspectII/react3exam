import { useState } from "react";
import "./Categories.css";
import data from "./data.json"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BiCategory } from "react-icons/bi";
import { TbBackground } from "react-icons/tb";
import { LuFlower2 } from "react-icons/lu";
import { TbSofa } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

import "swiper/css";


export default function Categories({ onApply, searchQuery }) {
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState("all");
  const [imgIndex, setImgIndex] = useState(0);

  const filteredData = data.filter(item => {
  const matchSearch =
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.types.toLowerCase().includes(searchQuery.toLowerCase());

  const matchFilter =
    filter === "all" || item.filterType === filter;

  return matchSearch && matchFilter;
});
     

    
    

  return (
    <section className="categories">
      <aside className="sidebar">
        <h2 className="sidebar-title">The Curator's Filter</h2>
        <p className="sidebar-subtitle">Refine by category</p>

        <ul className="filtertype">
          <li className={filter === "textiles" ? "active" : ""} onClick={() => setFilter("all")}><BiCategory /> All Collections</li>
          <li className={filter === "ceramics" ? "active" : ""} onClick={() => setFilter("ceramics")}><LuFlower2 /> Ceramics</li>
          <li className={filter === "finish" ? "active" : ""} onClick={() => setFilter("finish")}><TbBackground /> Textiles</li>
          <li className={filter === "furniture" ? "active" : ""} onClick={() => setFilter("furniture")}><TbSofa /> Furniture</li>
          <li className={filter === "apothecary" ? "active" : ""} onClick={() => setFilter("apothecary")}><BsStars /> Apothecary</li>
        </ul>

        <button className="apply-btn">
          Apply Filters
        </button>
      </aside>
      <div className="main-category">
        <div className="resultsearch">
          <p>Discovery Results</p>
          <h2>Results for: <div className="none-res">"{searchQuery}"</div></h2>
          <span>We've gathered 8 unique artifacts from our artisan partners that echo your aesthetic
            intention.</span>
        </div>
        <div className="prod-res-ser">
          {(filteredData).map(item =>  (
            
            
  <Link to={`/product/${item.id}`} className="resser-prod" key={item.id}>
    <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 2000 }}
  loop={true}
  className="img-swiper"
>
  <SwiperSlide>
    <img src={item.image} />
  </SwiperSlide>

  <SwiperSlide>
    <img src={item.image2} />
  </SwiperSlide>

  <SwiperSlide>
    <img src={item.image3} />
  </SwiperSlide>
</Swiper>
    <div className="about-prod">
      <h3>{item.name}</h3>
      <p>{item.collection}</p>
      <div className="price-det">
        <span>${item.price}</span>
        <span>View Details</span>
      </div>
    </div>
  </Link>
))}
        </div>
      </div>
    </section>
  );
}