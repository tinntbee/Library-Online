import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axiosClient from "../../../../api/axiosClient";
import userAPI from "../../../../api/userAPI";
import CommendBox from "../../../../components/CommendBox";
import YourComment from "../YourComment";
import "./style.scss";

Forum.propTypes = {};

function Forum(props) {
  const forum = useSelector((state) => state.bookDetail.forum);
  const [filter, setFilter] = useState("all");
  const [comments, setComments] = useState();
  useEffect(() => {
    switch (filter) {
      case "like":
        setComments({
          ...forum,
          data: [...forum.data].filter((item) => item.type == 1),
        });
        break;
      case "dislike":
        setComments({
          ...forum,
          data: [...forum.data].filter((item) => item.type == -1),
        });
        break;
      default:
        setComments({ ...forum });
        break;
    }
  }, [filter, forum]);
  return (
    <div className="Book-detail__container">
      <div className="Book-detail__header">
        <p className="Book-detail__title">FORUM</p>
        <div className="filters">
          <p>Filter by</p>
          <select
            className="filter-selection"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="all">Tất cả</option>
            <option value="like">Tích cực</option>
            <option value="dislike">Tiêu cực</option>
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
          {comments?.data &&
            comments.data.map((item, index) => {
              return <CommendBox key={item._id} data={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Forum;
