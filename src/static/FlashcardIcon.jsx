import React from "react";

FlashcardIcon.propTypes = {};

function FlashcardIcon(props) {
  return (
    <svg {...props} className={"icon flashcard-icon " + props.className}>
      <svg
        id="flashcard"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          id="ic_loyalty_24px"
          d="M33.056,17.328l-14.4-14.4A3.18,3.18,0,0,0,16.4,2H5.2A3.209,3.209,0,0,0,2,5.2V16.4a3.193,3.193,0,0,0,.944,2.272l14.4,14.4A3.18,3.18,0,0,0,19.6,34a3.128,3.128,0,0,0,2.256-.944l11.2-11.2A3.128,3.128,0,0,0,34,19.6,3.232,3.232,0,0,0,33.056,17.328ZM7.6,10A2.4,2.4,0,1,1,10,7.6,2.4,2.4,0,0,1,7.6,10ZM26.432,23.232,19.6,30.064l-6.832-6.832A4.005,4.005,0,0,1,15.6,16.4a3.951,3.951,0,0,1,2.832,1.184L19.6,18.736l1.168-1.168a4.005,4.005,0,0,1,5.664,5.664Z"
          transform="translate(-2 -2)"
        />
      </svg>
    </svg>
  );
}

export default FlashcardIcon;
