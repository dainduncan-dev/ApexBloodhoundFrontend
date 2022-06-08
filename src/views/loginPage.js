import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section className="login-form-container">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Login </h1>
        <hr />
        <label htmlFor="username" className="login-label">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          className="login-input"
        />
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
