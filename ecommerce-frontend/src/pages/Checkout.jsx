import React from "react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price}
          </p>
        </div>
      ))}

      <h3>Total: ${total}</h3>

      <button>Place Order</button>
    </div>
  );
}

export default Checkout;