import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const productData = data.product || data.data || data;
        setProduct(productData);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <div className="product-details-card">
        <h1>{product.name}</h1>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-details-price">
          ${product.price}
        </p>

        <button
          type="button"
          onClick={() => {
            console.log("BUTTON CLICKED");
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;