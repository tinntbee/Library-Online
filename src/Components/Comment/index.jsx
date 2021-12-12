import React, { useState } from "react";
import "./style.scss";
import RateLikeDislike from "../RateLikeDislike";
import ReplyIcon from "../../static/LikeIcon copy";
import ReplyComment from "../ReplyComment";
import classNames from "classnames";

Comment.propTypes = {};

function Comment(props) {
  const [replyVisible, setReplyVisible] = useState(false);
  const [yourReplyVisible, setYourReplyVisible] = useState(false);
  function showReplyHandle() {
    setReplyVisible(!replyVisible);
  }
  const { data } = props;
  const handleReply = () => {
    setYourReplyVisible(!yourReplyVisible);
  };
  return (
    <div className="Comment">
      <p className={"Comment-tag " + data.tag.toLowerCase()}>
        <b>{data.tag}</b>
      </p>
      <div className="Comment-content">
        <p>
          Các cành lá khá độc lập với nhau và có thể tóm được sau khi đọc xong
          phần thân chính. Chúng liên quan đến những vấn đề tôi đã nghiên cứu
          trong khoảng thời gian từ sau khi xuất bản cuốn Lược sử về thời gian
          đến nay.
        </p>
      </div>
      <div className="Comment-footer">
        <div className="Comment-footer-left">
          <p>Đánh giá</p>
          <RateLikeDislike />
        </div>
        <div className="Comment-footer-right">
          <p onClick={handleReply}>{yourReplyVisible ? "Hủy" : "Phản hồi"}</p>
          <div className="dot" />
          {!replyVisible ? (
            <>
              <ReplyIcon /> <p onClick={showReplyHandle}>Xem 13 Phản hồi</p>
            </>
          ) : (
            <p onClick={showReplyHandle}>Thu gọn</p>
          )}
          <div className="dot" />
          <p>Bình luận ngày 21/10/2021</p>
        </div>
      </div>

      {yourReplyVisible && (
        <div className="your-reply">
          <p>Trả lời @Trungtin</p>
          <dìv className="your-reply__content">
            <textarea>Phản hồi</textarea>
            <button className="btn-send">Đăng tải</button>
          </dìv>
        </div>
      )}

      <div
        className={classNames({
          "reply-comments": true,
        })}
      >
        {replyVisible ? (
          <>
            <ReplyComment />
            <ReplyComment />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Comment;
