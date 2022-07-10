import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FlowerIcon from "../../static/FlowerIcon";
import AlarmIcon from "../../static/AlarmIcon";
import BookIcon from "../../static/BookIcon";
import IncreaseIcon from "../../static/IncreaseIcon";
import LightBulbIcon from "../../static/LightBulbIcon";
import DecreaseIcon from "../../static/Decrease";
import { TextField } from "@material-ui/core";

Pomodoro.propTypes = {};

function Pomodoro(props) {
  alert(Date.now().toDateString());
  const [begin, setBegin] = React.useState(Date.now().toString());
  return (
    <div className="pomodoro main-content">
      <div className="header">
        <p className="title">POMODORO</p>
        <p className="hoa">$34</p>
      </div>
      <div className="body">
        <div>
          <div className="pomodoro-header">
            <div className="yellow box">
              <div className="data">
                <p className="value">300</p>
                <p className="label">HOA TÌM ĐƯỢC</p>
              </div>
              <FlowerIcon />
            </div>
            <div className="green box">
              <div className="data">
                <p className="value">30H</p>
                <p className="label">POMODORO</p>
              </div>
              <AlarmIcon />
            </div>
            <div className="red box">
              <div className="data">
                <p className="value">
                  4<small>/46</small>
                </p>
                <p className="label">SÁCH ĐÃ ĐỌC</p>
              </div>
              <BookIcon />
            </div>
          </div>
          <div className="promodoro-report">
            <div className="promodoro-report-actions">
              <div className="times-input">
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  variant="outlined"
                  size="small"
                  id="begin"
                  value={begin}
                  label={"Từ"}
                  type={"date"}
                  placeholder={"Thời gian"}
                  error={false}
                  helperText={""}
                />
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  variant="outlined"
                  size="small"
                  id="begin"
                  value={"2000-09-20"}
                  label={"Đến"}
                  type={"date"}
                  placeholder={"Thời gian"}
                  error={false}
                  helperText={""}
                />
              </div>
            </div>
            <div className="promodoro-report-body">
              <div className="promodoro-report-statistic">
                <div className="box">
                  <div className="icon-box green">
                    <AlarmIcon />
                  </div>
                  <div className="data">
                    <p className="label">POMODORO</p>
                    <p className="value">12 lần</p>
                  </div>
                  <div className="badge green">
                    <IncreaseIcon />
                    +34
                  </div>
                </div>
                <div className="box">
                  <div className="icon-box blue">
                    <LightBulbIcon />
                  </div>
                  <div className="data">
                    <p className="label">POMODORO</p>
                    <p className="value">3.4 Giờ</p>
                  </div>
                  <div className="badge red">
                    <DecreaseIcon />
                    -34
                  </div>
                </div>
                <div className="box">
                  <div className="icon-box yellow">
                    <FlowerIcon />
                  </div>
                  <div className="data">
                    <p className="label">Hoa tạo mới</p>
                    <p className="value">102</p>
                  </div>
                  <div className="badge red">
                    <DecreaseIcon />
                    -34
                  </div>
                </div>
              </div>
              <div className="promodoro-report-chart"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
