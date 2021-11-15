import React from "react";
import DislikeIcon from "../../static/DislikeIcon";
import LikeIcon from "../../static/LikeIcon";
import "./style.css";

RateLikeDislike.propTypes = {};

function RateLikeDislike(props) {
  const data = {
    like: 330,
    dislike: 34,
    likeClickHandle: () => {
      console.log("like click");
    },
    dislikeClickHandle: () => {
      console.log("dislike click");
    },
  };
  return (
    <div
      className="Rate-like-dislike"
      style={{
        "--rate-value": (data.like / (data.like + data.dislike)) * 100 + "%",
      }}
    >
      <div className="Rate-like" onClick={data.likeClickHandle}>
        <LikeIcon />
        <span>{data.like}</span>
      </div>
      <div className="Rate-dislike" onClick={data.dislikeClickHandle}>
        <DislikeIcon />
        <span>{data.dislike}</span>
      </div>
    </div>
  );
}

export default RateLikeDislike;
