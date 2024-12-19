import React from "react";

const Navbar = () => {
  return (
    <div className="nav_bar sticky-top">
      <div className="left">
        <h3>Redux-Toolkit</h3>
      </div>
      <div className="middle">
        <button className="btn btn-warning">
          <h2>cart Items Total Price = 0</h2>
        </button>
      </div>
      <div className="right">
        <button type="button" className="btn btn-primary position-relative">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
