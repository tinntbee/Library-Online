import React from "react";
import { Link } from "react-router-dom";
import LikeIcon from "../../static/LikeIcon";
import ReadIcon from "../../static/ReadIcon";
import "./style.css";

BookViewCard.propTypes = {};

function BookViewCard(props) {
  const {data} = props;
  console.log(data);
  return (
    <Link to={data.path} className="Book-view-card">
      <div
        className="Book-view-card-thumbnail"
        style={{ backgroundImage: `url(${data.thumbnailUrl})` }}
      ></div>
      <div className="Book-view-card-detail">
        <p className="Book-view-card-name">{data.nameBook}</p>
        <p className="Book-view-card-price">${data.price}</p>
      </div>
      <div className="Book-view-card-rate">
        <Link to="#">
          <ReadIcon />
          <p>{data.read}</p>
        </Link>
        <Link to="#">
          <LikeIcon />
          <p>{data.like}</p>
        </Link>
      </div>
    </Link>
  );
}

export default BookViewCard;
