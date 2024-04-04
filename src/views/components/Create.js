import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { createUser } from "../../controllers/userController.ts";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await createUser(firstName, lastName, email, password);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Create User</h1>
          <form onSubmit={store}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
