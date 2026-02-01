import QuantitySelector from "./QuantitySelector";
import "./citem.css";

export default function CartItem({
  id,
  name,
  price,
  img,
  quantity,
  maxQuantity = 10,
  onChangeQuantity,
  onRemove,
}) {
  const subtotal = price * quantity;

  return (
    <div className="cart-item section">
      <div className="cart-item-main">
        <div className="cart-thumb">
          <img className="cart-product-img" src={img} alt={`image of ${name}`} />
        </div>
        <div className="cart-info">
          <h3 className="cart-product-name" title={name}>{name}</h3>
          <p className="cart-product-price">${Number(price).toFixed(2)}</p>
          <button className="ghost-btn" onClick={onRemove} aria-label={`Remove ${name}`}>
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item-actions">
        <QuantitySelector
          value={quantity}
          onChange={onChangeQuantity}
          max={maxQuantity}
          size="sm"
        />
        <div className="cart-subtotal">
          <span className="muted">Subtotal</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}
