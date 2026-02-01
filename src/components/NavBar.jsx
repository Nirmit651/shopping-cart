import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar({cartCount}) {
  return (
    <nav className="navbar">
        <div className="nav-content">
            <h2>Store</h2>
            <div className='pages'>
                <h3><Link to="/">Home</Link></h3>
                <h3><Link to="/shop">Shop</Link></h3>
                <h3><Link to="/cart">Cart {cartCount}</Link></h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar