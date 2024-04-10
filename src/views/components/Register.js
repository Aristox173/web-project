import React, { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const navigate = useNavigate();

  const handleMethodChange = () => {
    setIsSignUpActive(!isSignUpActive);
    navigate("/");
  };

  const handleSignUp = () => {
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
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

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Register</h1>
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
            <button type="button" className="login-btn" onClick={handleSignUp}>
              Register
            </button>
          </form>
          <a onClick={handleMethodChange}>Sign In</a>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
}

export default Register;
