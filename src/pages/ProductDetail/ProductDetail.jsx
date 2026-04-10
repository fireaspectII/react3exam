import { Link, useParams } from "react-router-dom";
import data from "../Categories/data.json";
import { FaArrowLeft } from "react-icons/fa6";
import "./ProductDetail.css"

function ProductDetail() {
  const { id } = useParams();
  const item = data.find((item) => item.id === Number(id));

  if (!item) return <p>Product topilmadi</p>;

  return (
    <section className="prod-about-sec">
         <Link ><FaArrowLeft /> Back to All Products</Link>
         <div className="addcart">
            <img src={item.image} alt="" />
         </div>
    </section>
  );
}

export default ProductDetail;