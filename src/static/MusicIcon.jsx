import React from "react";

MusicIcon.propTypes = {};

function MusicIcon(props) {
  return (
    <svg {...props} className={"icon music-icon " + props.className}>
      <svg
        id="music"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 23.328 32.3"
      >
        <path
          id="ic_audiotrack_24px"
          d="M16.767,3V19.652a7.877,7.877,0,0,0-2.692-.5,8.075,8.075,0,1,0,7.985,8.972h.09V8.383h7.178V3Z"
          transform="translate(-6 -3)"
        />
      </svg>
    </svg>
  );
}

export default MusicIcon;
