import React from "react";
import { Link, useHistory } from "react-router-dom";
import LikeIcon from "../../static/LikeIcon";
import ReadIcon from "../../static/ReadIcon";
import "./style.css";

BookViewCard.propTypes = {};

function BookViewCard(props) {
  const { data } = props;
  const history = useHistory();
  return (
    <Link to={`/book-detail/${data._id}`} className="Book-view-card">
      <div
        className="Book-view-card-thumbnail"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="Book-view-card-detail">
        <p className="Book-view-card-name">{data.name}</p>
        <p className="Book-view-card-price">${data.price}</p>
      </div>
      <div className="Book-view-card-rate">
        <Link to="#">
          <ReadIcon />
          <p>{data.totalRead}</p>
        </Link>
        <Link to="#">
          <LikeIcon />
          <p>
            {data.totalLike + data.totalDislike > 0
              ? (data.totalLike / (data.totalLike + data.totalDislike)) * 100 + "%"
              : "-"}
          </p>
        </Link>
      </div>
    </Link>
  );
}

export default BookViewCard;
