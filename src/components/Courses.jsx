import React from "react";
import ClassicReact from "../assets/react-logo.svg";
import ReactHooks from "../assets/react-hooks-logo.svg";

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
  },
  {
    id: 2,
    icon: ReactHooks,
    courseName: "React Hooks",
    reviews: "4.96/5 - 89 Reviews",
    about:
      "Give your React knowledge an upgrade and start writing hooks today.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
  },
  {
    id: 1,
    icon: ClassicReact,
    courseName: "Classic React",
    reviews: "4.9/5 - 218 Reviews",
    about:
      "The best course in the world to take you from zero to enterprise grade React.",
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
            <article className="course-card">
              <header>
                <img src={course.icon} alt="" className="course-img" />

                <div>
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
