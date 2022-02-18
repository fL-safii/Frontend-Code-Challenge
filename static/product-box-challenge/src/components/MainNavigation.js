import { Link, NavLink } from "react-router-dom";

import HeaderCartButton from "../components/HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Rando Store</div>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/allproducts">
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/addproducts">
              Add Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/cart" >
              <HeaderCartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
