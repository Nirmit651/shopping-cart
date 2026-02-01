import IncrementDecrementBtn from "./IncrementDecrementBtn";
import { useState } from "react";
import './Card.css'

export default function Card({id, name, price, img, addToCart}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="card">
      <img className='product-img' src={img} alt={'image of ' + name}/>
      <h3 className='product-name'>{name}</h3>
      <h4 className='product-price'>${price}</h4>
      <div className="product-buttons">
          <IncrementDecrementBtn quantity={quantity} changeQuantity={setQuantity}/>
          <button className="product-buttons" onClick={() => addToCart(id, quantity)}>Add</button>
      </div>
    </div>

  );
}