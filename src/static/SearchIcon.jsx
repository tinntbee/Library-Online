import React from "react";

SearchIcon.propTypes = {};

function SearchIcon(props) {
  return (
    <svg {...props} className={"icon search-icon " + props.className}>
      <svg
        id="search"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          id="ic_search_24px"
          d="M20.153,18.094H19.069l-.384-.37a8.933,8.933,0,1,0-.961.961l.37.384v1.084L24.955,27,27,24.955Zm-8.233,0a6.175,6.175,0,1,1,6.175-6.175A6.167,6.167,0,0,1,11.919,18.094Z"
          transform="translate(-3 -3)"
        />
      </svg>
    </svg>
  );
}

export default SearchIcon;
