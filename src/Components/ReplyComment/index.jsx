import React from "react";
import RateLikeDislike from "../RateLikeDislike";
import "./style.css";

ReplyComment.propTypes = {};

function ReplyComment(props) {
  return (
    <div className="reply-comment">
      <p className="Reply-comment-user">
        <b>Huỳnh Vy </b>@huynhvy
      </p>
      <div className="Reply-comment-content Comment-content">
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
          <p>Phản hồi</p>
          <div className="dot" />
          <p>Bình luận ngày 21/10/2021</p>
        </div>
      </div>
    </div>
  );
}

export default ReplyComment;
