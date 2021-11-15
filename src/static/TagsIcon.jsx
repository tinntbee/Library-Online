import React from "react";

TagsIcon.propTypes = {};

function TagsIcon(props) {
  return (
    <svg {...props} className={"icon tags-icon " + props.className}>
      <svg
        id="categories"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 18.353"
      >
        <path
          id="ic_view_quilt_24px"
          d="M12.471,23.353h7.059V14.882H12.471ZM4,23.353h7.059V5H4Zm16.941,0H28V14.882H20.941ZM12.471,5v8.471H28V5Z"
          transform="translate(-4 -5)"
        />
      </svg>
    </svg>
  );
}

export default TagsIcon;
