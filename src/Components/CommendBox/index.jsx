import React from "react";
import CheckIcon from "../../static/ChecklIcon";
import HoaIcon from "../../static/HoaIcon";
import ReadIcon from "../../static/ReadIcon";
import Comment from "../Comment";
import "./style.css";

CommendBox.propTypes = {};

function CommendBox(props) {
  const { data } = props;
  return (
    <div className="Commend-box">
      <div className="Commend-box-left">
        {data && <Comment data={data} />}
      </div>
      <div className="Commend-box-right">
        <div className="user-information">
          <div
            className="user-avatar"
            style={{
              "--status": 0,
              backgroundImage: `url(${data.user.avatar})`,
            }}
          />
          <p className="full-name">
            {data.user.nickname ? data.user.nickname : data.user.name}
          </p>
          {"@" + data.user.email.substring(0, data.user.email.lastIndexOf("@"))}
        </div>
        <div className="user-detail">
          <p>
            <ReadIcon />
            Đã đọc: {data.user.totalBooks} quyển sách
          </p>

          <p>
            <HoaIcon />
            Tích lũy: {data.user.hoa} hoa
          </p>
          {data.user.isRead && (
            <p>
              <CheckIcon />
              <b>Đã đọc quyển sách này</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommendBox;
