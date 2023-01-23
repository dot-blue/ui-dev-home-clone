import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import Malak from "../assets/malak-profile.webp";
import Clarissa from "../assets/clarissa-profile.webp";
import Faraz from "../assets/faraz-profile.webp";
import Star from "../assets/star.svg";

function Hero() {
  const [width, setWidth] = useState(0);
  const sliderWrapper = useRef();

  const cards = [
    {
      id: 1,
      className: "card  card-active",
      name: "Malak Joseph",
      draggable: "x",
      course: "Typescript",
      testimonial:
        "“I hated TypeScript when I dealt with it at work because I didn’t know how to use it and only produced red lines! Now, can’t say I’m an expert but an app without TS is full of distractions and more complicated!”",
      image: Malak,
    },
    {
      id: 2,
      className: "card  card-left",
      name: "Clarissa Gayton",
      draggable: "",
      course: "Modern Javascript",
      testimonial:
        "“What a gem! I’ve just completed a bootcamp and have been studying on my own for quite some time now. I spent a few weeks doing research on the best online courses ... and I’m sad to say I didn’t find Tyler McGinnis earlier.”",
      image: Clarissa,
    },
    {
      id: 3,
      className: "card  card-right",
      name: "Simon Vrachliotis",
      draggable: "",
      course: "React Hooks",
      testimonial:
        "“I already knew React hooks, but this course really consolidated my understanding of them. I teach React training workshops myself, and after taking this course, my confidence in talking about hooks is much stronger.”",
      image: Faraz,
    },
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
                {
                  <div className="card-container">
                    <header className="card-header">
                      <span className="card-elipse">
                        <img src={card.image} alt="" />
                      </span>

                      <div className="name-container">
                        <div className="name-container--inner">
                          <div>
                            <h3>{card.name}</h3>
                            <p>{card.course}</p>
                          </div>
                          <div className="star-container">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className="card-testimonial">
                      {" "}
                      <p>{card.testimonial}</p>
                    </div>
                  </div>
                }
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
