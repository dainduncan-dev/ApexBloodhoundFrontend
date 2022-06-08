import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import menuItems from './MenuItems';
import {FaTimes, FaBars} from 'react-icons/fa';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }
  
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Apex Bloodhound Stat Tracker Logo" />
      </div>
      {user ? (
        <>
          <div className="menu-icon" onClick={handleClick}>
            {active ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="auth-link-wrapper">
            <button onClick={logoutUser} className="auth-link-logout">
              Logout
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="menu-icon" onClick={handleClick}>
            {active ? (
              <FaTimes className="fa-times" />
            ) : (
              <FaBars className="fa-bars" />
            )}
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="auth-link-wrapper">
            <div className="auth-link">
              <Link to="/login" className="login">
                Login
              </Link>
            </div>

            <div className="auth-link">
              <Link to="/register" className="register">
                Register
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
