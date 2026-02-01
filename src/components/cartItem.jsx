import IncrementDecrementBtn from "./IncrementDecrementBtn";
import { useState } from "react";
import './cartItem.css'

export default function CartItem({name, price, img}) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="cart-item">
      <img className='cart-product-img' src={img} alt={'image of ' + name}/>
      <h3 className='cart-product-name'>{name}</h3>
      <h4 className='cart-product-price'>${price}</h4>
      <div className="product-buttons">
          <IncrementDecrementBtn quantity={quantity} changeQuantity={setQuantity}/>
      </div>
    </div>

  );
}