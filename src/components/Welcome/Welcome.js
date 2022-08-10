import React from "react";
import "./Welcome.scss";
import { NavLink } from "react-router-dom";
import divider from "../../assets/images/divider-one-dot.png";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__hero-container">
        <div className="welcome__hero-overlay">
          <h1 className="welcome__hero-text">
            Find workout partners in your area
          </h1>
          <NavLink className="welcome__signup-link" to="/signup">
            <button className="welcome__signup-button">Get Started</button>
          </NavLink>
        </div>
      </div>

      <div className="welcome__steps">
        <div className="welcome__step">
          <div className="welcome__step-divider">
            <img src={divider} alt="" className="welcome__step-divider-image" />
          </div>
          <h2 className="welcome__step-title">Step 1</h2>
          <p className="welcome__step-text">Create a profile with Matchup</p>
        </div>
        <div className="welcome__step">
          <div className="welcome__step-divider">
            <img src={divider} alt="" className="welcome__step-divider-image" />
          </div>
          <h2 className="welcome__step-title">Step 2</h2>
          <p className="welcome__step-text">
            Select the sports you'd like to play
          </p>
        </div>
        <div className="welcome__step">
          <div className="welcome__step-divider">
            <img src={divider} alt="" className="welcome__step-divider-image" />
          </div>
          <h2 className="welcome__step-title">Step 3</h2>
          <p className="welcome__step-text">
            Connect with other players in your area
          </p>
        </div>
      </div>
      <div className="welcome__button-container">
        <NavLink
          className="welcome__signup-link welcome__signup-link--bottom"
          to="/signup"
        >
          <button className="welcome__signup-button">Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
