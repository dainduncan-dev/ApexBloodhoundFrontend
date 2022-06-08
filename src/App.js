import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/navigation/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import PlayerSearch from "./views/playerSearchPage";
import PlayerStats from './views/playerStatsPage';
import Icons from './utils/icons';

function App() {
  Icons();
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Home />} path="/" />
            <Route element={<PlayerSearch />} path="/playersearch" />
            <Route element={<PlayerStats />} path="/playerstats" />
          </Routes>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
