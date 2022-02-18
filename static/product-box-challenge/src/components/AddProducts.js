import React from "react";
import AddForm from "./AddForm";
import classes from './AddProducts.module.css';


const AddProducts = (props) => {
    return(
        <React.Fragment>
        <h1 className={classes.tag} >Add Products</h1>
        <AddForm onFormData={props.onFormData} />
        </React.Fragment>

    )
};

export default AddProducts;