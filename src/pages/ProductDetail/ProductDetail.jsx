import { useParams } from "react-router-dom";
import data from "../Categories/data.json";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css"

function ProductDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = data.find((item) => item.id === Number(id));

    if (!item) return <p>Product topilmadi</p>;

    return (
        <section className="prod-about-sec">
            <p className="mainpcard" onClick={() => navigate(-1)}><FaArrowLeft /> Back to All Products</p>
            <div className="addcart">
                <img src={item.image} alt="" />
                <div className="about-addcart">
                    <p><div className="filt" onClick={() => navigate(-1)}>{item.filterType}</div> / <div className="collec">{item.collection}</div></p>
                    <h2>The Lunar
                        Vessel</h2>
                    <div className="price-carts">
                        <span className="FirstPrice">${item.price}</span>
                        <span className="OldPrice">${item.oldPrice}</span>
                    </div>
                    <div className="inform">
                        {item.description}
                    </div>
                    <div className="materials">
                        <div className="mater"><p>Material</p> <div className="mater-name mater-names">{item.material}</div></div>
                        <div className="finish"><p>Finish</p> <div className="finish-name mater-names">{item.finish}</div></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductDetail;