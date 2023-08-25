import React from "react";
import "./Footer.scss";
import { Link, Outlet } from "react-router-dom";

function Footer() {
  return (
    <footer>
        <ul className="flex align-center justify-center">
          <li>
            <Link to="/">PRIVACY POLICY</Link>
          </li>
          <li className="vert-line"></li>
          <li>
            <Link to="/">TERMS OF SERVICE</Link>
          </li>
          <li className="vert-line"></li>
          <li>
            <Link to="/">ABOUT SNAPUP.</Link>
          </li>
        </ul>
        <div className="text-center">
          <span>© 2022 SnapUp. All Rights Reserved.</span>
        </div>
    </footer>
  );
}

export default Footer;
