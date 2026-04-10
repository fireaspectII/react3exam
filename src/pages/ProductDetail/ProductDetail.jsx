import { useParams } from "react-router-dom";
import data from "../Categories/data.json";
import "./ProductDetail.css"

function ProductDetail() {
  const { id } = useParams();
  const product = data.find((item) => item.id === Number(id));

  if (!product) return <p>Product topilmadi</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.collection}</p>
      <p>{product.description}</p>
      <span>${product.price}</span>
    </div>
  );
}

export default ProductDetail;