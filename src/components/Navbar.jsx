import React from "react";
import { useSelector } from "react-redux";
import {
  addToCart,
  selectCartItems,
  selectCartTotalPrice,
} from "../redux/cartSlice/index";

const Navbar = () => {
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(totalPrice);

  return (
    <div className="nav_bar sticky-top">
      <div className="left">
        <h3>Redux-Toolkit</h3>
      </div>
      <div className="middle">
        <button className="btn btn-warning">
          <h2>cart Items Total Price = {totalPrice} ₹</h2>
        </button>
      </div>
      <div className="right">
        <button type="button" className="btn btn-primary position-relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItem.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
