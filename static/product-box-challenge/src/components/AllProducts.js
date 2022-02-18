import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import classes from "./AllProducts.module.css";
import HardCodedItems from "./HardCodedItems";

const AllProducts = (props) => {

  



  return (
    <React.Fragment>
      <h1 className={classes.tag}> Featured Products </h1>
      <div className={classes.card}>
        <div className={classes.container}>
          <ProductCard
            onCartData={props.onCartData}
            name={props.name}
            price={props.price}
            image={props.image}
          />


        </div>
      </div>
    </React.Fragment>
  );
};

export default AllProducts;
