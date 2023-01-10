import React from "react";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-left-container">
        <div className="hero-left">
          <header>
            <h1>Welcome, Friend</h1>
            <h2>Stuck in tutorial hell?</h2>
          </header>

          <p>
            You’ve come to the right place. We make learning the JavaScript
            ecosystem fun, approachable, and easy...
          </p>

          <div className="hero-cta">
            <a href="#">
              <span>Shut up and take my money</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-right-container">
        <div className="hero-right">
          <div className="card card1">Card 1</div>
          <div className="card card2">Card 2</div>
          <div className="card card3">Card 3</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
