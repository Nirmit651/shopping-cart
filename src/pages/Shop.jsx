import {useOutletContext } from "react-router-dom";
import Card from "../components/Card.jsx";
import "./Shop.css";

export default function Shop() {
  const {products, addToCart} = useOutletContext();
    return (
      <div className="card-container">
        {products.map(product => (
          <Card
            key={product.id}
            id = {product.id}
            name={product.title}
            price={product.price}
            img={product.image}
            addToCart={addToCart}
          />
        ))}
      </div>
    );
}