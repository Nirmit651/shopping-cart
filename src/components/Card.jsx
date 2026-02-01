import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import "./Card.css";

export default function Card({ id, name, price, img, addToCart, maxQuantity = 10 }) {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity <= 0) return;
    addToCart(id, quantity);
    setQuantity(1);
  };

  return (
    <article className="card">
      <div className="card-media">
        <img className="product-img" src={img} alt={`image of ${name}`} />
      </div>
      <div className="card-body">
        <h3 className="product-name" title={name}>{name}</h3>
        <div className="product-meta">
          <span className="product-price">${Number(price).toFixed(2)}</span>
        </div>
        <div className="card-actions">
          <QuantitySelector value={quantity} onChange={setQuantity} max={maxQuantity} />
          <button className="primary-btn" onClick={handleAdd} disabled={quantity <= 0}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
