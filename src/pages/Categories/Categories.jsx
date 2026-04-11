import { useState } from "react";
import "./Categories.css";
import data from "./data.json"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const categories = [
  {
    id: "all",
    label: "All Collections",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="10" y="2" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="2" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="10" y="10" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: "ceramics",
    label: "Ceramics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <ellipse cx="9" cy="7" rx="5" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M4 11 C4 14 14 14 14 11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    id: "textiles",
    label: "Textiles",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 4 L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 8 L16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 1 L16 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "furniture",
    label: "Furniture",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="8" width="14" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <rect x="5" y="5" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <line x1="2" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "apothecary",
    label: "Apothecary",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M9 2 L10.5 7 L16 7 L11.5 10.5 L13 16 L9 12.5 L5 16 L6.5 10.5 L2 7 L7.5 7 Z"
          stroke="currentColor"
          strokeWidth="1.3"
          fill="none"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Categories({ onApply, searchQuery }) {
  const [imgIndex, setImgIndex] = useState(0);

 
  const [selected, setSelected] = useState("ceramics");

  const handleApply = () => {
    const active = categories.find((c) => c.id === selected);
    if (onApply) onApply(active);
   
  };
   const filteredProducts = data.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()
    ),
    );
      const filteredProduct = data.filter(item =>
      item.types.toLowerCase().includes(searchQuery.toLowerCase()
    ),
    );
    
    

  return (
    <section className="categories">
      <aside className="sidebar">
        <h2 className="sidebar-title">The Curator's Filter</h2>
        <p className="sidebar-subtitle">Refine by category</p>

        <ul className="filter-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                className={`filter-item ${selected === cat.id ? "active" : ""}`}
                onClick={() => setSelected(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                {cat.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="apply-btn" onClick={handleApply}>
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
          {(filteredProduct.length ? filteredProduct : filteredProducts).map(item =>  (
            
            
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