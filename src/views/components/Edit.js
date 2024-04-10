import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { editUser } from "../../controllers/userController.ts";

const Edit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    editUser(id, firstName, lastName, email, password);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit User</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
