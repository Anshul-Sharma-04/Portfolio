import "./card.css";
import React from "react";
const Card = function ({ project }) {
  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className = "card-body">
        <h2>{project.title}</h2>
        <p>
          <i>{project.technology}</i>
        </p>
        <p>{project.body}</p>
        </div>
        <button>Visit</button>
    </div>
  );
};

export default Card;
