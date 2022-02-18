import React from "react";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";


const Cart = () => {
    return(
        <React.Fragment>
        <h1 className={classes.tag} >Your Cart</h1>
        <CartItems />
        </React.Fragment>

    )
};

export default Cart;