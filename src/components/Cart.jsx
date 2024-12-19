import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartItems } from "../redux/cartSlice/index";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
const Cart = () => {
  const cartItem = useSelector(selectCartItems);
  const dispatch = useDispatch();
  console.log(cartItem);
  return (
    <>
      <ToastContainer />
      <div className="container text-center my-5" style={{ width: "700px" }}>
        {cartItem.length == 0 && (
          <>
            <h1>Your Cart is Empty</h1>
            <Link to={"/"} className="btn btn-warning">
              Continue Shoping...
            </Link>
          </>
        )}

        {cartItem.map((item, index) => (
          <div className="conatiner my-5" key={index}>
            <div
              className="card mb-3 bg-dark text-light text-center"
              style={{ width: "650px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="p-3">
                    <img
                      src={item.imgSrc}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ borderRadius: "10px" }}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary mx-3">
                      {item.price} ₹
                    </button>
                    <button className="btn btn-warning">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {cartItem.length != 0 && (
          <button
            className="btn btn-warning"
            onClick={() => {
              dispatch(clearCart());
              toast.success(" Cart Cleared", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            }}
          >
            clear cart
          </button>
        )}
      </div>
    </>
  );
};

export default Cart;
