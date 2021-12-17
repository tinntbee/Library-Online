import React, { useState } from "react";
import replyAPI from "../../api/replyAPI";
import RateLikeDislike from "../RateLikeDislike";
import "./style.css";

ReplyComment.propTypes = {};

function ReplyComment(props) {
  const { data } = props;
  const [reply, setReply] = useState(data);
  const likeClickHandle = async () => {
    if (reply.react == 1) {
      await replyAPI.removeReact(reply._id).then((res) => {
        setReply({
          ...reply,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 0,
        });
      });
    } else {
      await replyAPI.likeReact(reply._id).then((res) => {
        setReply({
          ...reply,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 1,
        });
      });
    }
  };
  const dislikeClickHandle = async () => {
    if (reply.react == -1) {
      await replyAPI.removeReact(reply._id).then((res) => {
        setReply({
          ...reply,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 0,
        });
      });
    } else {
      await replyAPI.dislikeReact(reply._id).then((res) => {
        setReply({
          ...reply,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: -1,
        });
      });
    }
  };
  return (
    <div className="reply-comment">
      <p className="Reply-comment-user">
        <b>{reply.user.nickname ? reply.user.nickname : reply.user.name} </b>
        {"@" + reply.user.email.substring(0, reply.user.email.lastIndexOf("@"))}
      </p>
      <div className="Reply-comment-content Comment-content">
        <p>{reply.content}</p>
      </div>
      <div className="Comment-footer">
        <div className="Comment-footer-left">
          <RateLikeDislike
            rate={{
              like: reply.totalLike,
              dislike: reply.totalDislike,
              react: reply.react,
            }}
            likeClickHandle={likeClickHandle}
            dislikeClickHandle={dislikeClickHandle}
          />
        </div>
        <div className="Comment-footer-right">
          <p>{reply.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ReplyComment;
