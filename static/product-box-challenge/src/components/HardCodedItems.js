import React from 'react';
import Bed from '../assets/bed.jpg'
import classes from './ProductCard.module.css';



const HardCodedItems = () => {
    return(
        <React.Fragment>
        <div className={classes.card}>
        <img src={Bed}  />
        <h1>King Size Bed</h1>
        <p className={classes.price}>300</p>
        <p><button  >Add to Cart</button></p>
      </div>
        </React.Fragment>
    )
};

export default HardCodedItems;
