import React from "react";
import { Link } from "react-router-dom";
import CommendBox from "../../../../components/CommendBox";
import SendIcon from "../../../../static/SendIcon";
import YourComment from "../YourComment";
import "./style.scss";

Forum.propTypes = {};

function Forum(props) {
  const handleReply = () => {
    console.log("reply");
  };

  return (
    <div className="Book-detail__container">
      <div className="Book-detail__header">
        <p className="Book-detail__title">FORUM</p>
        <div className="filters">
          <p>Filter by</p>
          <select className="filter-selection">
            <option>Tích cực</option>
            <option>Tiêu cực</option>
            <option>Mới nhất</option>
          </select>
        </div>
      </div>
      <div className="Book-comment__your-comment">
        <p>Ý kiến của bạn</p>
        <YourComment />
      </div>
      <div className="Book-comment__content">
        <p>Các bàn luận khác </p>
        <div>
          <CommendBox handleReply={handleReply} data={{ tag: "Like" }} />
          <CommendBox data={{ tag: "Dislike" }} />
        </div>
      </div>
    </div>
  );
}

export default Forum;
