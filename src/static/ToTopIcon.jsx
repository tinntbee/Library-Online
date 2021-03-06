import React from "react";

ToTopIcon.propTypes = {};

function ToTopIcon(props) {
  return (
    <svg {...props} className={"icon to-top-icon " + props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32.389 20"
      >
        <g
          id="ic_keyboard_arrow_right_24px"
          transform="translate(0 20) rotate(-90)"
        >
          <path
            id="ic_keyboard_arrow_right_24px-2"
            data-name="ic_keyboard_arrow_right_24px"
            d="M8.59,34.333,20.952,21.944,8.59,9.556,12.4,5.75,28.59,21.944,12.4,38.139Z"
            transform="translate(-8.59 -5.75)"
          />
        </g>
      </svg>
    </svg>
  );
}

export default ToTopIcon;
