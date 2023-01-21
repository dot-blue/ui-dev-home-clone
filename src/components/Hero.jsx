import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  const cards = [
    { id: 1, className: "card  card-active", name: "card1", draggable: "x" },
    { id: 2, className: "card  card-left", name: "card2", draggable: "" },
    { id: 3, className: "card  card-right", name: "card3", draggable: "" },
  ];

  useEffect(() => {
    setWidth(
      sliderWrapper.current.scrollWidth - sliderWrapper.current.offsetWidth
    );

    console.log(width);
  }, []);
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
        <motion.div
          className="hero-right"
          ref={sliderWrapper}
          whileTap={{ cursor: "grabbing" }}
        >
          {cards.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className={card.className}
                drag={card.draggable}
                dragConstraints={{ right: 0, left: -width }}
              >
                {card.name}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
