import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log("PRODUCTS:", data);

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts(data.products || data.data || []);
        }
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  }, []);

  return (
    <div className="products-page">
      <h1>Our Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h2>{product.name}</h2>

              <p>{product.description}</p>

              <p className="product-price">
                ${product.price}
              </p>

              <div className="product-actions">
                <Link to={`/products/${product.id}`}>
                  View Details
                </Link>

                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;