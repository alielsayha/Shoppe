import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="inner flex">
        <div className="image-holder">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-security-4897468-4077880.png"
            alt=""
          />
        </div>
        <div className="right">
          <h4>Welcome Back</h4>
          <form className="flex flex-column align-center justify-center">
            <div className="LoginYourAccount ">Login</div>
            <input type="text" placeholder="User Name " />
            <input type="password" placeholder="Password " />
            <button>Login</button>
            <Link to="/register" className="createAccount">
              {" "}
              Create Account{" "}
            </Link>
            <a href="#" className="forgetPassword ">
              forget Password ?
            </a>
          </form>
        </div>
      </div>
      <div className="goToHome">
        <Link to="/">Go To Home</Link>
      </div>
    </div>
  );
};

export default Login;
