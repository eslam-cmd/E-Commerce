import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div
        style={{ minHeight: "650px" }}
        className="d-flex justify-content-center mt-5"
      >
        <div className="login-container">
          <div className="login-header">
            <div>Register New Account</div>
          </div>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            id="username"
          />
          <input
            type="text"
            className="login-input"
            placeholder="Email"
            id="email"
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            id="password"
            maxLength="15"
            minLength="8"
          />
          <button className="login-button" id="register-button">
            Register
          </button>
          <h5 className="mt-3 text-center">
            Already have an account?
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span className="text-danger" style={{ cursor: "pointer" }}>
                Click here
              </span>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Register;
