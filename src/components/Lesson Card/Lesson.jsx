import React from "react";
import "./Lesson.css";

const Lesson = ({ data }) => {
  return (
    <div className="container">
      <h2>Lesson Reminder</h2>
      <div className="lessons">
        {data.map(({ id, name, image, hour }) => (
          <div className="items" key={id}>
            <img src={image} alt={name} />
            <div>
              <div className="lesson-info">
                <p>
                  <span>Lesson Name :</span> {name}
                </p>
                <p>
                  <span>Lesson Hour :</span> {hour}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson;
