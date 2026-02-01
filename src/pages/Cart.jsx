import {useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";
import "./Cart.css";

export default function Cart() {
  const {products, addToCart, cartItems} = useOutletContext();

  return (
    <div className="cart-container">
        {cartItems.map(cartItem => (
          <CartItem
            key={products[cartItem.id-1].id}
            id = {products[cartItem.id-1].id}
            name={products[cartItem.id-1].title}
            price={products[cartItem.id-1].price}
            img={products[cartItem.id-1].image}
            addToCart={addToCart}
          />
        ))}
    </div>
  );
}