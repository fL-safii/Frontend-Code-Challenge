import React from "react";
import "./cart_II.css";
// import productImage from '../assets/slippers.jpg'


const CartItems = (props) => {


    
    return(
        <React.Fragment>
      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            <div className="items-info">
                <div className="product-img" >
                    <img src={props.image} alt="cart-image" />
                </div>

                <div className="title" >
                    <h2>{props.name}</h2>
                    <p>Product Details</p>
                </div>

                <div className="price" >
                    <h3>{props.price}</h3>
                </div>

                <div className="action" >
                <button>Remove</button>
            </div>

            </div>
          </div>
        </div>
      </section>
    </React.Fragment>

    )
};

export default CartItems;