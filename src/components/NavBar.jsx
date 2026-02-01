import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

function NavBar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <span className="brand-dot" />
          Night Market
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "")}>
            Shop
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
            Cart
          </NavLink>
        </nav>
        <Link to="/cart" className="cart-pill">
          <span>Cart</span>
          <span className="cart-badge">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}

export default NavBar;
