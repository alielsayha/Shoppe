import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { fetchAsyncCategory } from "../../store/categorySlice";
import { getCartTotal } from "../../store/cartSlice";

function Navbar() {
  const dispatch = useDispatch();
  const [searchItem , setSearchItem] =  useState("")
  const categories = useSelector((state) => state.category.categories);
  const cartData = useSelector((state) => state.cart.cart);
  const cartCount = useSelector((state) => state.cart.totalItems);
  const allCategories = categories.slice(0, 8);

  // console.log(cartCount);

const handelSearch =(e)=> {
  e.preventDefault();
  setSearchItem(e.target.value)
}
  useEffect(() => {
    dispatch(fetchAsyncCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch , cartData]);


  return (
    <nav className="navbar ">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler  flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-white"
            onClick={() => {
              dispatch(setSidebarOn());
            }}
          >
            <i className="fas fa-bars "></i>
          </button>
          <Link to="/" className="flex align-center navbar-brand">
            <span className="navbar-brand-icn">
              <i className="fa-solid fa-bag-shopping"></i>
            </span>
            <span className="navbar-brand-txt mx-1">
              <span className="fw-7">Snap</span>Up.
            </span>
          </Link>
        </div>

        <div className="navbar-collapse w-100 mx-2">
          <div className="navbar-search bg-white br-1">
            <div className="flex align-center justify-between my-2">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search your Preferred"
                onChange={(e)=>handelSearch(e)}
              />
              <Link
                to={`search/${searchItem}`}
                className="text-dark search-btn flex align-center justify-center mx-1 my-1 bg-light-orange py-1 px-4 br-1"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-11 fw-4 font-manrope">
            {allCategories.map((category, idx) => {
              return (
                <li className="nav-item no-wrap" key={idx}>
                  <Link
                    to={`/category/${category}`}
                    className="nav-link text-capitalize"
                  >
                    {category}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="/cart" className="cart-btn">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="cart-items-value">
              {cartCount}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
