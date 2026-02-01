import { useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../components/Card.jsx";
import "./Shop.css";

export default function Shop() {
  const { products, addToCart, maxQuantity } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("none");

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sort === "price-asc") {
      return [...filtered].sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      return [...filtered].sort((a, b) => b.price - a.price);
    }
    return filtered;
  }, [products, searchTerm, sort]);

  return (
    <div className="container shop-page">
      <div className="page-header">
        <div>
          <p className="eyebrow muted">Explore</p>
          <h1 className="page-title">Shop</h1>
          <p className="muted">Find curated essentials with a slick checkout.</p>
        </div>
        <div className="shop-controls">
          <label className="search-box">
            <span className="search-icon" aria-hidden>🔎</span>
            <input
              type="text"
              placeholder="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="none">Sort</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
          </select>
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <div className="empty-state section">
          <p>No products match “{searchTerm}”.</p>
        </div>
      ) : (
        <div className="card-grid">
          {visibleProducts.map((product) => (
            <Card
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              img={product.image}
              addToCart={addToCart}
              maxQuantity={maxQuantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}
