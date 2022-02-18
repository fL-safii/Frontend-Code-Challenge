import React, { useState } from "react";
import classes from './ProductCard.module.css';
// import productImage from '../assets/slippers.jpg'

//w3school image link:          https://www.w3schools.com/w3images/jeans3.jpg

const ProductCard = (props) => {

  // const [addtoCart, setAddtoCart] = useState(false);

  const addtoCartHandler = () => {
    const cartData = {
      name: `${props.name}`,
      price: `${props.price}`,
      image: `${props.image}`
    }

    // setAddtoCart(cartData);
    props.onCartData(cartData);
   
  };

    return(
        <React.Fragment>
        
     
          <div className={classes.card}>
        <img src={props.image}  />
        <h1>{props.name}</h1>
        <p className={classes.price}>{props.price}</p>
        <p><button onClick={addtoCartHandler} >Add to Cart</button></p>
      </div>
        
        
        </React.Fragment>
    )
};

export default ProductCard;