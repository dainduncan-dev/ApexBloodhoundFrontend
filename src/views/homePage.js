import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineBarChart } from 'react-icons/ai';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="homepage-container">
      <div className="homepage-heading">
        {user && <UserInfo user={user} />}
        <h1>Select one of the below.</h1>
      </div>
      <div className="card-wrapper">
        <div className="card-container">
          <Link to="/playersearch" className="homepage-card">
            Search
            <FaSearch className="icon" />
          </Link>
        </div>
        <div className="card-container">
          <Link to="/playerstats" className="homepage-card">
            Stats
            <AiOutlineBarChart className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
