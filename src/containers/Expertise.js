import React from "react";

function Expertise() {
  return (
    <div className="expertise-cards">
      <div id="first" className="expertise-card">
        <div className="hexagon" id="first-hex">
          <i className="hex-icon fas fa-paint-roller fa-2x"></i>
        </div>
        <div>
          <h2 className="expertise-title">FRONTEND</h2>
          <p>
            React, React Native, Typescript and Apollo GraphQL are my main
            frontend technologies. I also am deeply intrested in Web design
            trends, performace and UI/UX to make my apps as user friendly and
            eye catching as possible.
          </p>
        </div>
      </div>
      <div id="second" className="expertise-card">
        <div className="hexagon" id="second-hex">
          <i className="hex-icon fas fa-server fa-2x"></i>
        </div>
        <div>
          <h2 className="expertise-title">BACKEND</h2>
          <p>
            I have a good understanding of how to work with MongoDB, Apollo
            GraphQL and Node.js. I try to make my code as readable and
            understandable as possible. I aim to make production-ready apps with
            proper security and efficiency.{" "}
          </p>
        </div>
      </div>
      <div id="third" className="expertise-card">
        <div className="hexagon" id="third-hex">
          <i className="hex-icon fas fa-users fa-2x"></i>
        </div>
        <div>
          <h2 className="expertise-title">TEAMWORK</h2>
          <p>
            I have participated in Erasmus projects and many events where I was
            the leader. I understand the importance and benefits of a united
            team. I am good at public speaking, communicating and getting my
            point across
          </p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
