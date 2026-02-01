import './App.css'
import NavBar from './components/NavBar'
import { useState, useEffect  } from 'react';
import { Outlet } from 'react-router-dom';

function App() {

  const [cartItems, setCartItems] = useState([]);

  function addToCart(id, quantity) {

    let cartClone = [];

    for(let i = 0;i<cartItems.length;i++) {
      let cartItem = {id: cartItems[i].id, quantity: cartItems[i].quantity}
      cartClone.push(cartItem);
    }

    let duplicate = false;

    for(let i = 0;i<cartItems.length;i++) {
      //update quantity of cart item if it already exists in the array
      if(cartClone[i].id == id) {
        cartClone[i].quantity+=quantity;
        duplicate = true;
      }
    }

    if(duplicate) {
      setCartItems(cartClone);
    } else {
      cartClone.push({id, quantity});
      setCartItems(cartClone);
    }

  }
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        const productData = await response.json();
        setProducts(productData);
        console.log(productData)
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts([]); // ← keep array
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    
    
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  
  return (
    <>
      <NavBar cartCount={cartItems.length}/>
      <main className='page-content'>
        <Outlet context={{products, addToCart, cartItems}}/>
      </main>
    </>
  )
}

export default App
