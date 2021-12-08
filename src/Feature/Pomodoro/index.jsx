import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Pomodoro.propTypes = {};

function Pomodoro(props) {
  return (
    <div className="pomodoro main-content">
      <div className="header">
        <p className="title">POMODORO</p>
        <p className="hoa">$34</p>
      </div>
      <div className="body">
        <div>
          <div className="chart-container"></div>
          <div className="land-container"></div>
          <div className="sound-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
