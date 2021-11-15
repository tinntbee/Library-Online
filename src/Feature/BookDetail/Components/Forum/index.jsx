import React from "react";
import { Link } from "react-router-dom";
import CommendBox from "../../../../Components/CommendBox";
import SendIcon from "../../../../static/SendIcon";
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
      <div className="Book-comment__content">
        <CommendBox handleReply={handleReply} data={{ tag: "Like" }} />
        <CommendBox data={{ tag: "Dislike" }} />
      </div>
      <div className="Book-comment__editor active">
        <div className="Book-comment__avatar"></div>
        <input type="Book-comment__text" />
        <Link href="#">
          <SendIcon />
        </Link>
      </div>
    </div>
  );
}

export default Forum;
