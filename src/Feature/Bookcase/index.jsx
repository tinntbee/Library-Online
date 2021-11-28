import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BookcaseContainer from "./Container";

Bookcase.propTypes = {};

function Bookcase(props) {
  const data = {
    thumbnail:
      "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/134920815_2919525021705722_5696714602081731378_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=19026a&_nc_ohc=pd4KWxccopIAX-_ukHo&_nc_ht=scontent.fvca1-2.fna&oh=34448c3f50e35e1710da6d4bf0f792f5&oe=61C30249",
  };
  return (
    <div className="bookcase main-content">
      <div className="header">
        <p className="title">BOOKCASE</p>
        <p className="hoa">$34</p>
      </div>
      <div className="body">
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${data.thumbnail})` }}
        />
        <div className="content">
          <div className="spacing">
              <div className="intro">
                  <p>Tủ sách này của nhà bạn <b>BEE</b> đó ^^
                  </p>
              </div>
              <button className="camera" style={{backgroundImage: "url('icons/camera.svg')"}}></button>
          </div>
          <BookcaseContainer/>
          <BookcaseContainer/>
        </div>
      </div>
    </div>
  );
}

export default Bookcase;
