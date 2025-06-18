import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      style={{ minHeight: "650px" }}
      className="d-flex justify-content-center mt-5"
    >
      <div className="login-container">
        <div className="login-header">
          <div>Login</div>
        </div>
        <input
          type="text"
          className="login-input"
          placeholder="Email"
          id="username"
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          id="password"
          maxLength="15"
          minLength="8"
        />
        <button className="login-button" id="login-button">
          Login
        </button>
        <h5 className="mt-3 text-center">
          Don't have an account?
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span className="text-danger" style={{ cursor: "pointer" }}>
              Click here
            </span>
          </Link>
        </h5>
      </div>
      <Link to="/admin/AllProduct">
        <label>Admin Login</label>
      </Link>
      <Link to="/User/AllOrders">
        <label>User Login</label>
      </Link>
    </div>
  );
};

export default LoginPage;
