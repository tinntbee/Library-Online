import React from "react";

LikeIcon.propTypes = {};

function LikeIcon(props) {
  return (
    <svg {...props} className={"icon like-icon " + props.className}>
      <svg
        id="like"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 18.182"
      >
        <path
          id="ic_thumb_up_24px"
          d="M1,19.182H4.636V8.273H1Zm20-10a1.824,1.824,0,0,0-1.818-1.818H13.445l.864-4.155.027-.291a1.368,1.368,0,0,0-.4-.964L12.973,1,6.991,6.991a1.778,1.778,0,0,0-.536,1.282v9.091a1.824,1.824,0,0,0,1.818,1.818h8.182a1.806,1.806,0,0,0,1.673-1.109l2.745-6.409A1.8,1.8,0,0,0,21,11V9.264l-.009-.009Z"
          transform="translate(-1 -1)"
        />
      </svg>
    </svg>
  );
}

export default LikeIcon;
