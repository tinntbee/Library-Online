import { Link, useHistory } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import ReadIcon from "../../static/ReadIcon";
import LikeIcon from "../../static/LikeIcon";

SearchBookViewCard.propTypes = {};

function SearchBookViewCard(props) {
  const { data } = props;

  return (
    <Link to={`/book-detail/${data._id}`} className="search-book-view-card">
      <div
        className="search-book-view-card__thumbnail"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="search-book-view-card__detail">
        <p className="name">{data.name}</p>
        <p className="price">${data.price}</p>
      </div>
      <div className="search-book-view-card__rate">
        <Link to="#">
          <ReadIcon />
          <p>{data.totalRead}</p>
        </Link>
        <Link to="#">
          <LikeIcon />
          <p>{(data.like / (data.like + data.dislike)) * 100}</p>
        </Link>
      </div>
    </Link>
  );
}

export default SearchBookViewCard;
