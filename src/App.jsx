import './App.css'
import NavBar from './components/NavBar'
import { useState, useEffect  } from 'react';
import { Outlet } from 'react-router-dom';

const MAX_QTY = 10;
const clampQuantity = (value) => {
  const safeNumber = Number.isFinite(value) ? value : 0;
  return Math.min(MAX_QTY, Math.max(0, Math.round(safeNumber)));
};

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addToCart = (id, quantity) => {
    const amount = clampQuantity(quantity);
    if (amount <= 0) return;

    setCart((prev) => {
      const next = { ...prev };
      const updatedQty = clampQuantity((next[id] || 0) + amount);
      if (updatedQty <= 0) {
        delete next[id];
      } else {
        next[id] = updatedQty;
      }
      return next;
    });
  };

  const updateCartQuantity = (id, quantity) => {
    const amount = clampQuantity(quantity);
    setCart((prev) => {
      const next = { ...prev };
      if (amount <= 0) {
        delete next[id];
      } else {
        next[id] = amount;
      }
      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  const resetCart = () => {
    setCart({});
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const productData = await response.json();
        setProducts(productData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <div className="app-shell">
      <NavBar cartCount={totalItems}/>
      <main className='page-content'>
        <Outlet context={{
          products,
          addToCart,
          cart,
          updateCartQuantity,
          removeFromCart,
          maxQuantity: MAX_QTY,
          resetCart
        }}/>
      </main>
    </div>
  )
}

export default App
