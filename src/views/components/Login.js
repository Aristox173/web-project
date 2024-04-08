import React from "react";
import "../../styles/login.css";

function Login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <form>
            <input type="text" placeholder="Email" className="login-input" />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-btn">Login</button>
          </form>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
}

export default Login;
