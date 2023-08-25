import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCart,
  getCartTotal,
  removeAllCart,
  removeFromCart,
} from "../../store/cartSlice";
import "./CartPage.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartPage() {
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.cart.cart);
  const cartTotalPrice = useSelector((state) => state.cart.totalValue);
  const cartTotalCount = useSelector((state) => state.cart.totalItems);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, productCart]);

  const handelAddCart = (productSingle) => {
    dispatch(addCart(productSingle));
    toast.success("Item added to cart!");
  };

  const handelRemoveFromCart = (productSingle) => {
    dispatch(removeFromCart(productSingle));
    toast.success("Item Remove From cart!");
  };
  const handelRemoveAllFromCart = (productSingle) => {
    dispatch(removeAllCart(productSingle));
    toast.success("Item Remove From cart!");
  };

  const handelProductCart = () => {
    return (
      <div className="contentCart flex">
        <div className=" cartBody flex-direction">
          <div className="container">
            {productCart.map((item) => {
              const discount =
                item.price - (item.price * item.discountPercentage) / 100;
              return (
                <div className="cartTr flex align-center my-4" key={item.id}>
                  <div className="cartImg">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="contentProduct fs-12">
                    <div className="fs-19 fw-5">
                      Title :
                      <span>
                        {" "}
                        {item.title.length > 10
                          ? item.title.slice(0, 10) + "..."
                          : item.title}
                      </span>
                    </div>
                    <div className="oldPrice">
                      Old Price :<span> ${item.price.toFixed(2)}</span>
                    </div>
                    <div className="Quantity flex align-center">
                      <span>Quantity : </span>
                      <div className="qty-change flex align-center mx-4">
                        <button onClick={() => handelRemoveFromCart(item)}>
                          <i className="fas fa-minus"></i>
                        </button>
                        <span> {item.qty} </span>
                        <button onClick={() => handelAddCart(item)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                    <div>
                      Price :<span> ${discount.toFixed(2)}</span>
                    </div>
                    <div className="fs-16">
                      Total Price :
                      <span className="fw-6">
                        {" "}
                        ${(item.qty * discount).toFixed(2)}
                      </span>
                    </div>
                    <div className="deleteItem">
                      <Link
                        to="/cart"
                        onClick={() => handelRemoveAllFromCart(item)}
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="right">
          <div className="cart-cfoot flex align-start justify-between py-3 bg-white">
            <div className="cart-cfoot-r flex flex-column justify-end">
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">
                  Total ({cartTotalCount}) items :{" "}
                  <span className="fs-18 fw-7 text-orange">
                    ${cartTotalPrice.toFixed(2)}
                  </span>
                </div>
              </div>
              {productCart.map((item) => {
                let discount =
                  item.price - (item.price * item.discountPercentage) / 100;
                return (
                  <div
                    className="contentProduct flex justify-between align-center"
                    key={item.id}
                  >
                    <span>{item.title.slice(0, 15)}</span>
                    <span>({item.qty})</span>
                    <span>${discount.toFixed(2)}</span>
                  </div>
                );
              })}

              <button
                type="button"
                className="checkout-btn text-white bg-orange fs-16"
                // onClick={() => {
                //   dispatch(removeAllCar());
                // }}
              >
                <Link to={"/checkout"}>Check Out</Link>
              </button>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" />
      </div>
    );
  };

  const empty = () => {
    return (
      <div
        className="notDefineProduct flex flex-column justify-center align-center"
        style={{ height: "100vh" }}
      >
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/out-of-stock-5100752-4264526.png?f=webp"
          alt=""
        />
        <Link to="/" className="goToHome">Go To Home</Link>
      </div>
    );
  };

  return productCart.length > 0 ? handelProductCart() : empty();
}

export default CartPage;
