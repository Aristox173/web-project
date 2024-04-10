import React, { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import { Navigate } from "react-router-dom";

function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginActive, setIsLoginActive] = useState(false);
  const navigate = useNavigate();

  const handleMethodChange = () => {
    setIsLoginActive(!isLoginActive);
    navigate("/register");
  };

  const handleSignIn = () => {
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  if (user) {
    return <Navigate to="/users"></Navigate>;
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
        </div>
        <div className="login-form">
          <form>
            <input
              type="text"
              placeholder="Email"
              className="login-input"
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={handlePasswordChange}
            />
            <button type="button" className="login-btn" onClick={handleSignIn}>
              Login
            </button>
          </form>
          <button className="sign-btn" onClick={handleMethodChange}>
            Sign Up
          </button>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
}

export default Login;
