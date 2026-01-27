import './NavBar.css'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
        <div className="nav-content">
            <h2>Store</h2>
            <div className='pages'>
                <h3><Link to="Home">Home</Link></h3>
                <h3><Link to="Shop">Shop</Link></h3>
                <h3><Link to="Cart">Cart</Link></h3>
            </div>
        </div>
    </nav>
  )
}

export default NavBar