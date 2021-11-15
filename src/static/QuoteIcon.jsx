import React from "react";

QuoteIcon.propTypes = {};

function QuoteIcon(props) {
  return (
    <svg {...props} className={"icon quote-icon " + props.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 107.211 76.579"
      >
        <path
          id="ic_format_quote_24px"
          d="M12.658,83.579H35.632L50.948,52.948V7H5V52.948H27.974Zm61.264,0H96.9l15.316-30.632V7H66.264V52.948H89.237Z"
          transform="translate(-5 -7)"
        />
      </svg>
    </svg>
  );
}

export default QuoteIcon;
