import React from "react";

DislikeIcon.propTypes = {};

function DislikeIcon(props) {
  return (
    <svg {...props} className={"icon dislike-icon " + props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25 23.024"
      >
        <path
          id="ic_thumb_down_24px"
          d="M16.273,3H6.455A2.167,2.167,0,0,0,4.447,4.331L1.153,12.022a2.155,2.155,0,0,0-.153.8V14.9l.011.011L1,15a2.188,2.188,0,0,0,2.182,2.182h6.884L9.029,22.167,9,22.516a1.642,1.642,0,0,0,.48,1.156l1.156,1.145,7.189-7.189a2.168,2.168,0,0,0,.633-1.538V5.182A2.188,2.188,0,0,0,16.273,3Zm4.364,0V16.091H25V3Z"
          transform="translate(-0.5 -2.5)"
        />
      </svg>
    </svg>
  );
}

export default DislikeIcon;
