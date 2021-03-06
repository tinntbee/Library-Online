import React from "react";

SendIcon.propTypes = {};

function SendIcon(props) {
  return (
    <svg {...props} className={"icon send-icon " + props.className}>
      <svg
        id="ic_send_24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 20.571"
      >
        <path
          id="ic_send_24px-2"
          data-name="ic_send_24px"
          d="M2.011,23.571,26,13.286,2.011,3,2,11l17.143,2.286L2,15.571Z"
          transform="translate(-2 -3)"
        />
      </svg>
    </svg>
  );
}

export default SendIcon;
