import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
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
            <div className="LoginYourAccount">Register</div>
            <input type="text" placeholder="User Name " />
            <input type="text" placeholder="E-mail " />
            <input type="password" placeholder="Password " />
            <input type="password" placeholder="Confirm Password " />
            <button>Login</button>
            <span className="fs-12">
              Have an Account ?
              <Link to="/login" className="createAccount">
                {" "}
                Login{" "}
              </Link>
            </span>
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

export default Register;
