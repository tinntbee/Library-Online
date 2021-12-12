import React from "react";
import CheckIcon from "../../static/ChecklIcon";
import HoaIcon from "../../static/HoaIcon";
import ReadIcon from "../../static/ReadIcon";
import Comment from "../Comment";
import "./style.css";

CommendBox.propTypes = {};

function CommendBox(props) {
  const { data, handleReply } = props;
  return (
    <div className="Commend-box">
      <div className="Commend-box-left">
        <Comment handleReply={handleReply} data={data} />
      </div>
      <div className="Commend-box-right">
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

export default CommendBox;
