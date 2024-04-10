import React, { useState } from "react";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import { createUser } from "../../controllers/userController.ts";
import Swal from "sweetalert2";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      Swal.fire("Please enter a valid email address!");
      return;
    }
    await createUser(firstName, lastName, email, password);
    navigate("/");
  };

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

  const handleFirstNameChange = (event) => setFirstName(event.target.value);
  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <h1>Register</h1>
        </div>
        <div className="login-form">
          <form onSubmit={store}>
            <input
              type="text"
              placeholder="Name"
              className="login-input"
              onChange={handleFirstNameChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="login-input"
              onChange={handleLastNameChange}
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="login-input"
              onChange={handleEmailChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={handlePasswordChange}
              required
            />
            <button type="submit" className="login-btn" onClick={handleSignUp}>
              Register
            </button>
          </form>
          <button className="sign-btn" onClick={handleMethodChange}>
            Sign In
          </button>
        </div>
        <div className="login-footer"></div>
      </div>
    </div>
  );
}

export default Register;
