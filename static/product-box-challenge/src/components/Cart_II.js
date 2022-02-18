import React from "react";
// import classes from "./Cart.module.css";
// import CartItems from "./CartItems";
import "./cart_II.css";
import productImage from "../assets/slippers.jpg";
import CartItems from "./CartItems";

const Cart_II = (props) => {
  return (
    <React.Fragment>
      <section className="main-cart-section">
        <h1>Your Shopping Cart</h1>
      </section>

      <CartItems name={props.name} price={props.price} image={props.image} />


    </React.Fragment>
  );
};

export default Cart_II;
