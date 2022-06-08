import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <section className="register-form-wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Register</h1>
        <hr />
        <div>
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            className="base-input"
          />
        </div>
        <div>
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="base-input"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            onChange={(e) => setPassword2(e.target.value)}
            required
            className="base-input"
          />
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <button className="btn">Register</button>
      </form>
    </section>
  );
}

export default Register;
