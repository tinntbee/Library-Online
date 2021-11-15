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
                "url(https://scontent.fvca1-3.fna.fbcdn.net/v/t1.6435-9/243027416_3138938306431058_4725055277341185435_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZqjxB11SllIAX9kazMi&_nc_ht=scontent.fvca1-3.fna&oh=d970ccb0fd93f7b46e6623068d012d1a&oe=6197CD34)",
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
