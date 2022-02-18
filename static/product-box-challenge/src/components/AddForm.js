import { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./AddForm.module.css";

const AddForm = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const history = useHistory();

  const formData = {
    name: name,
    price: price,
    image: image,
  };

  props.onFormData(formData);

  // console.log(formData);

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const priceInputHandler = (event) => {
    setPrice(event.target.value);
  };

  const imageInputHandler = (event) => {
    setImage(event.target.value);
  };

  const submissionHandler = (event) => {
    event.preventDefault();

    console.log(name);
    console.log(price);
    console.log(image);

    setName(""); //Two way binding.
    setPrice("");
    setImage("");

    history.push('/allproducts')
    
  };

  return (
    <form onSubmit={submissionHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="text"
          onChange={nameInputHandler}
          value={name}
          name="name"
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="name">Price</label>
        <input
          type="text"
          id="text"
          onChange={priceInputHandler}
          value={price}
          name="price"
        />
      </div>

      <div className={classes.control}>
        <label htmlFor="name">Image Url</label>
        <input
          type="text"
          id="text"
          onChange={imageInputHandler}
          value={image}
          name="image"
        />
      </div>

      <div className={classes.action}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddForm;
