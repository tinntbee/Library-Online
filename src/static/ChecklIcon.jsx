import React from "react";

CheckIcon.propTypes = {};

function CheckIcon(props) {
  return (
    <svg {...props} className={"icon check-icon " + props.className}>
      <svg
        id="ic_check_circle_24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 18 18"
      >
        <path
          id="ic_check_circle_24px-2"
          data-name="ic_check_circle_24px"
          d="M11,2a9,9,0,1,0,9,9A9,9,0,0,0,11,2ZM9.2,15.5,4.7,11,5.969,9.731,9.2,12.953l6.831-6.831L17.3,7.4Z"
          transform="translate(-2 -2)"
        />
      </svg>
    </svg>
  );
}

export default CheckIcon;
