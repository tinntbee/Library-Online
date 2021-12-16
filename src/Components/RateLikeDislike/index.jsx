import classNames from "classnames";
import React from "react";
import DislikeIcon from "../../static/DislikeIcon";
import LikeIcon from "../../static/LikeIcon";
import "./style.scss";

RateLikeDislike.propTypes = {};

function RateLikeDislike(props) {
  const { rate, likeClickHandle, dislikeClickHandle } = props;
  return (
    <>
      {rate && (
        <div
          className="Rate-like-dislike"
          style={{
            "--rate-value":
              rate.dislike + rate.like > 0
                ? (rate.like / (rate.like + rate.dislike)) * 100 + "%"
                : "0%",
          }}
        >
          <div
            className={classNames({
              "Rate-like": true,
              react: rate.react == 1,
            })}
            onClick={likeClickHandle}
          >
            <LikeIcon />
            <span>{rate.like}</span>
          </div>
          <div
            className={classNames({
              "Rate-dislike": true,
              react: rate.react == -1,
            })}
            onClick={dislikeClickHandle}
          >
            <DislikeIcon />
            <span>{rate.dislike}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RateLikeDislike;
