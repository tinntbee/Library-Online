import React from "react";
import PropTypes from "prop-types";
import CheckIcon from "../../../../static/ChecklIcon";
import HoaIcon from "../../../../static/HoaIcon";
import ReadIcon from "../../../../static/ReadIcon";
import "./style.scss";

YourComment.propTypes = {};

function YourComment(props) {
  return (
    <div className="your-comment">
      <div className="your-comment__left">
        <div className="Comment">
          <p className={"Comment-tag " + "like".toLowerCase()}>
            <b>{"like"}</b>
          </p>
          <div className="Comment-content">
            <textarea className="your-comment-content">
              Các cành lá khá độc lập với nhau và có thể tóm được sau khi đọc
              xong phần thân chính. Chúng liên quan đến những vấn đề tôi đã
              nghiên cứu trong khoảng thời gian từ sau khi xuất bản cuốn Lược sử
              về thời gian đến nay.
            </textarea>
          </div>
          <button className="btn-send">Đăng tải</button>
        </div>
      </div>
      <div className="your-comment__right">
        <div className="user-information">
          <div
            className="user-avatar"
            style={{
              "--status": 1,
              backgroundImage:
                "url(https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/240581367_3138938299764392_2228439304544764616_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tPUB3fnIlA8AX90MaV5&tn=yNwWdXyL0_83m3M_&_nc_ht=scontent.fvca1-4.fna&oh=218f4291773bed8308637f6592590a28&oe=61B583ED)",
            }}
          />
          <p className="full-name">Nguyễn Trung Tín</p>
          <p className="id">@trungtin27</p>
        </div>
        <div className="user-detail">
          <p>
            <ReadIcon />
            Đã đọc: 8 quyển sách
          </p>

          <p>
            <HoaIcon />
            Tích lũy: 100 hoa
          </p>

          <p>
            <CheckIcon />
            <b>Đã đọc quyển sách này</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default YourComment;
