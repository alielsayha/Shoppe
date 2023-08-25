import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <header className="header text-white">
      <div className="container">
        <div className="header-cnt">
          <div className="header-cnt-top fs-11 py-0 flex align-center justify-between py-1">
            <div className="header-cnt-top-l">
              <ul className="flex align-center top-links">
                <li>
                  <Link to="/">Seller Center</Link>
                </li>
                <li className="vert-line"></li>
                <li>
                  <Link to="/">DownLoad</Link>
                </li>
                <li className="vert-line"></li>
                <li className="flex align-center">
                  <span className="fs-11">Follow US On</span>
                  <ul className="flex">
                    <li className="mx-1">
                      <a
                        href="https://fb.com"
                        target="_blank"
                        className="fs-15"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/alielsayha"
                        target="_blank"
                        className="fs-15"
                      >
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="header-cnt-top-r">
              <ul className="flex align-center">
                <li>
                  <span className="mx-1">
                    <i className="fa-solid fa-question"></i>
                  </span>
                  <span>Support</span>
                </li>
                <li className="vert-line"></li>
                <li>
                  <span>
                    <i className="fa fa-user-plus mx-1"></i>
                    <Link to="/register">Register</Link>
                  </span>
                </li>
                <li className="vert-line"></li>
                <li>
                  <span>
                    <Link to="/login">
                      <i className="fa-solid fa-right-to-bracket mx-1"></i>
                      Log In
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-cnt-down">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
