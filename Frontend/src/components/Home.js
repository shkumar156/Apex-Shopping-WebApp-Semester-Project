import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Carousel from "./Carousel";
import Footer from "./Footer";
import Homeall from "./Homeall";
import banner from "../Images/about/banner.png";
import "./home.css";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row2">
          <div style={{ marginBottom: '12px' }}>
            <Carousel />
          </div>
          <div style={{ marginBottom: '12px' }}>
            <Homeall />
          </div>
          <img className="carouselImg" src={banner} alt="" />
          <Link to="/rate"> {/* Add a Link to the /track path */}
            <button className="rate-title" style={{ marginTop: '8px', marginBottom: '8px' }}>
              <h3>Rate our Website</h3>
            </button>
          </Link>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
