import React from "react";

PomodoroIcon.propTypes = {};

function PomodoroIcon(props) {
  return (
    <svg {...props} className={"icon read-icon " + props.className}>
      <svg
        id="pomodoro"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26.6 38"
      >
        <path
          id="ic_lightbulb_outline_24px"
          d="M12.6,38.1A1.906,1.906,0,0,0,14.5,40h7.6A1.906,1.906,0,0,0,24,38.1V36.2H12.6ZM18.3,2a13.294,13.294,0,0,0-7.6,24.206V30.5a1.906,1.906,0,0,0,1.9,1.9H24a1.906,1.906,0,0,0,1.9-1.9V26.206A13.294,13.294,0,0,0,18.3,2Zm5.415,21.09L22.1,24.23V28.6H14.5V24.23l-1.615-1.14a9.5,9.5,0,1,1,10.83,0Z"
          transform="translate(-5 -2)"
        />
      </svg>
    </svg>
  );
}

export default PomodoroIcon;
