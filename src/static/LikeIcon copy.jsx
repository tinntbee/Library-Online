import React from "react";

ReplyIcon.propTypes = {};

function ReplyIcon(props) {
  return (
    <svg {...props} className={"icon reply-icon " + props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 15.158"
      >
        <path
          id="ic_keyboard_return_24px"
          d="M4.526,7.263v5.053H21.162L16.64,7.781,18.421,6,26,13.579l-7.579,7.579L16.64,19.377l4.522-4.535H2V7.263Z"
          transform="translate(-2 -6)"
        />
      </svg>
    </svg>
  );
}

export default ReplyIcon;
