import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container home-page">
      <section className="hero section">
        <div className="hero-content">
          <p className="pill">Curated · Modern · Fast</p>
          <h1 className="hero-title">A modern dark shop with goods you’ll actually use.</h1>
          <p className="hero-subtitle">
            Discover beautifully built essentials with secure checkout and fast shipping. Designed with the same polish
            as the tools you love.
          </p>
          <div className="hero-actions">
            <Link to="/shop" className="primary-btn hero-cta">Browse the shop</Link>
            <Link to="/cart" className="ghost-link">View cart</Link>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-stat">
            <span className="stat-label">Shipping</span>
            <span className="stat-value">Free over $50</span>
          </div>
          <div className="panel-stat">
            <span className="stat-label">Protection</span>
            <span className="stat-value">Secure checkout</span>
          </div>
          <div className="panel-stat">
            <span className="stat-label">Quality</span>
            <span className="stat-value">Curated items</span>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features-header">
          <p className="eyebrow muted">Why shop here</p>
          <h2>Built for modern shoppers</h2>
        </div>
        <div className="feature-grid">
          <div className="feature-tile section">
            <div className="icon-bubble">🚚</div>
            <h3>Fast + free shipping</h3>
            <p className="muted">We dispatch quickly and cover shipping on carts over $50.</p>
          </div>
          <div className="feature-tile section">
            <div className="icon-bubble">🔒</div>
            <h3>Secure checkout</h3>
            <p className="muted">Encrypted payments with trusted processors and no surprises.</p>
          </div>
          <div className="feature-tile section">
            <div className="icon-bubble">✨</div>
            <h3>Quality picks</h3>
            <p className="muted">Only products that meet our bar for design, durability, and value.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
