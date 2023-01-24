import React from "react";
import ClassicReact from "../assets/react-logo.svg";
import ReactHooks from "../assets/react-hooks-logo.svg";
import ReactQuery from "../assets/react-query-logo.svg";
import ReactRouterImg from "../assets/react-router-logo.svg";
import ModernJavascript from "../assets/modern-javascript-logo.svg";
import AdvancedJavascript from "../assets/advanced-javascript-logo.svg";
import Typescript from "../assets/typescript-logo.svg";
import TypescriptWithReact from "../assets/react-with-typescript-logo.svg";

import Star from "../assets/star.svg";
import Developers from "../assets/dev-brain.svg";

const courses = [
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
    backgroundColor: "#FCBA28",
  },
  {
    id: 2,
    icon: ReactHooks,
    courseName: "React Hooks",
    reviews: "4.96/5 - 89 Reviews",
    about:
      "Give your React knowledge an upgrade and start writing hooks today.",
    backgroundColor: "#0BA95B",
  },
  {
    id: 3,
    icon: ReactQuery,
    courseName: "React Query",
    reviews: "4.91/5 - 22 Reviews",
    about:
      "The official React Query course will get you building apps like a pro.",
    backgroundColor: "#7B5EA7",
  },
  {
    id: 4,
    icon: ReactRouterImg,
    courseName: "React Router",
    reviews: "4.87/5 - 38 Reviews",
    about:
      "We’ll get you off to the races building complex apps with React Router.",
    backgroundColor: "#12B5E5",
  },
  {
    id: 5,
    icon: ModernJavascript,
    courseName: "Modern Javascript",
    reviews: "4.89/5 - 183 Reviews",
    about:
      "Lay a solid foundation for your JavaScript knowledge using the latest features.",
    backgroundColor: "#F9F4DA",
  },
  {
    id: 6,
    icon: AdvancedJavascript,
    courseName: "Advanced Javascript",
    reviews: "4.91/5 - 203 Reviews",
    about:
      "Take your JavaScript skills to the next level and master the mother language.",
    backgroundColor: "#ED203D",
  },
  {
    id: 7,
    icon: Typescript,
    courseName: "Typescript",
    reviews: "4.89/5 - 37 Reviews",
    about:
      "Our course is the complete guide that takes you from zero to TypeScript hero.",
    backgroundColor: "#FC7428",
  },
  {
    id: 8,
    icon: TypescriptWithReact,
    courseName: "React w/Typescript",
    reviews: "4.86/5 - 14 Reviews",
    about:
      "Feel comfortable working on any React app by adding TypeScript to your toolkit.",
    backgroundColor: "#F38BA3",
  },
];

function Courses() {
  return (
    <div className="course-section">
      <header>
        <img src={Developers} alt="" />
        <h3>Feed your developer brain</h3>
        <h4>
          Our courses are the ultimate brain food
          <span>{`(and that learning budget is not going to spend itself)`}</span>
        </h4>
      </header>

      <div className="course-list">
        {courses.map((course) => {
          return (
            <article
              className="course-card"
              style={{
                backgroundColor: `${course.backgroundColor}`,
              }}
            >
              <header>
                <img src={course.icon} alt="" className="course-img" />

                <div className="card-info-container">
                  <h5>{course.courseName}</h5>
                  <div className="star-container courses-star">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                  </div>
                  <span>{course.reviews}</span>
                </div>
              </header>

              <p className="course-about">{course.about}</p>
              <div className="card-learn-more">Learn More →</div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;
