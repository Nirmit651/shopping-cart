import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import "./Cart.css";

export default function Cart() {
  const { products, cart, updateCartQuantity, removeFromCart, maxQuantity, resetCart } = useOutletContext();

  const detailedItems = Object.entries(cart)
    .map(([id, quantity]) => {
      const product = products.find((p) => p.id === Number(id));
      if (!product) return null;
      return { ...product, quantity };
    })
    .filter(Boolean);

  const totalItems = detailedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = detailedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container cart-page">
      <div className="page-header">
        <div>
          <p className="eyebrow muted">Bag</p>
          <h1 className="page-title">Cart</h1>
          <p className="muted">Review items, adjust quantities, or remove what you don't need.</p>
        </div>
      </div>

      {detailedItems.length === 0 ? (
        <div className="empty-state section">
          <p>Your cart is empty. Add something from the shop to get started.</p>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-list">
            {detailedItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.title}
                price={item.price}
                img={item.image}
                quantity={item.quantity}
                maxQuantity={maxQuantity}
                onChangeQuantity={(qty) => updateCartQuantity(item.id, qty)}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}
            <button className="primary-btn" onClick={() => resetCart()}>Clear Cart</button>
          </div>

          <aside className="cart-summary section">
            <div className="summary-header">
              <h3>Order summary</h3>
              <span className="muted">{totalItems} {totalItems === 1 ? "item" : "items"}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="muted">Calculated at checkout</span>
            </div>
            <div className="summary-divider" />
            <div className="summary-row total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="primary-btn summary-cta" disabled>
              Checkout (demo)
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
