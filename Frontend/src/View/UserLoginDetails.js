import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserLoginDetails.css";
import Footer from "../components/Footer";

const UserLoginDetails = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/home");
  };

  return (
    <div className="PageWrapper">
      <div className="UserDetailsContainer">
        <h2 className="WelcomeMessage">Welcome to Apex Shop!</h2>
        <button className="ExploreButton" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default UserLoginDetails;
