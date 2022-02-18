import React, { useEffect, useState } from "react";

import { Route, Redirect } from "react-router-dom";

import AddProducts from "./components/AddProducts";
import AllProducts from "./components/AllProducts";
// import Cart from "./components/Cart";
import Cart_II from "./components/Cart_II";
import Home from "./components/Home";
import MainNavigation from "./components/MainNavigation";

// import ItemImage from "./assets/bed.jpg";

function App() {
  const [addtoCart, setAddToCard] = useState("");
  const [formData, setFormData] = useState({});

  //   const productData = {
  //     productName: "Slippers",
  //     productPrice: 50,
  //     productImage: "https://www.w3schools.com/w3images/jeans3.jpg"
  //   };

  const onFormData = (formEntries) => {
    
    setFormData(formEntries);
    // console.log(formEntries);
  };

  const dataForm = formData;

  console.log(dataForm);

  const toFormData = {
    formName: dataForm.name,
    formPrice: dataForm.price,
    formImage: dataForm.image,
  };

 

  const onCartData = (cartData) => {
  
       
   
    console.log("In Apps.js");
    setAddToCard(cartData);
  };

  const Data = addtoCart;

  const productData = {
    productName: Data.name,
    productPrice: Data.price,
    productImage: Data.image,
  };
  
  useEffect(() => {
    setFormData(dataForm);
  }, [dataForm ] );


  return (
    <React.Fragment>
      <MainNavigation />

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>

      <Route path="/home">
        <Home />
      </Route>

      <Route path="/allproducts">
        <AllProducts
          onCartData={onCartData}
          name={toFormData.formName}
          price={toFormData.formPrice}
          image={toFormData.formImage}
          id={toFormData.formId}
        />
      </Route>

      <Route path="/addproducts">
        <AddProducts onFormData={onFormData} />
      </Route>

      <Route path="/cart">
        <Cart_II
          name={productData.productName}
          price={productData.productPrice}
          image={productData.productImage}
        />
      </Route>
    </React.Fragment>
  );
}

export default App;
