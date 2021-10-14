import React from "react";

LibraryIcon.propTypes = {};

function LibraryIcon(props) {
  return (
    <svg {...props} className={"icon library-icon " + props.className}>
      <svg
        id="library"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 25.883 29.55"
      >
        <path
          id="ic_local_library_24px"
          d="M15.942,15.732A18.913,18.913,0,0,0,3,10.628V26.445a18.913,18.913,0,0,1,12.942,5.1,18.98,18.98,0,0,1,12.942-5.1V10.628A18.913,18.913,0,0,0,15.942,15.732Zm0-5.1a4.314,4.314,0,1,0-4.314-4.314A4.308,4.308,0,0,0,15.942,10.628Z"
          transform="translate(-3 -2)"
        />
      </svg>
    </svg>
  );
}

export default LibraryIcon;
