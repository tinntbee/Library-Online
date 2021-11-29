import React from "react";
import PropTypes from "prop-types";

index.propTypes = {};

function index(props) {
  return (
    <div className="Book-information-container Book-detail-container">
      <div className="Book-information-top">
        <div className="Book-information-top-left">
          <div
            className="Book-thumbnail"
            style={{
              "--book-thumbnail-url": `url(${state.data.image})`,
            }}
          />
          <div className="Book-rate">
            <RateLikeDislike />
            <span>Share:</span>
            <img alt="share on facebook" src={FacebookIcon} />
            <img alt="share on message" src={MessageIcon} />
            <img alt="copy link" src={LinkIcon} />
            <div className="Rate-popup">
              <Link to="#">
                <ReadIcon />
                <p>{state.data.totalRead}</p>
              </Link>
              <Link to="#">
                <LikeIcon />
                <p>
                  {(state.data.like / (state.data.like + state.data.dislike)) *
                    100}
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="Book-information-top-right">
          <div className="Book-title">
            <p className="Book-name">{state.data.name.toUpperCase()}</p>
            <p className="Book-price">${state.data.price}</p>
            <div className="Book-tags">
              {state.data.tags.map((item, index) => {
                return (
                  <Link className="book-tag" key={index} to={item.path}>
                    {item.name.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="Book-description">
            <p>
              Tác giả: <b>Stephen hawking</b>
            </p>
            <p>
              Xuất bản: <b>2019</b>
            </p>
            <p>
              Tái bản: <b>2020</b>
            </p>
            <p>
              Nhà xuất bản: <b>Kim đồng</b>
            </p>
          </div>
          <div className="Book-action">
            <button className="Book-action__read-now">READ NOW</button>
            <button className="Book-action__add-to-bookcase">
              ADD TO BOOKCASE
            </button>
          </div>
        </div>
      </div>
      <div className="Book-information-bottom">
        <div className="Book-quote">
          <p>
            <b>Gia tốc</b> và <b>hấp dẫn</b> chỉ có thể tương đương với nhau nếu
            một vật thể có khối lượng lớn bẻ cong không thời gian, do đó bẻ cong
            cả lộ trình của các vật thể xung quanh nó ...
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
