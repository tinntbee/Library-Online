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
import { Bar } from "react-chartjs-2";
import { useHistory } from "react-router";
import { Chart as ChartJS, registerables } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import userAPI from "../../api/userAPI";
ChartJS.register(...registerables);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Pomodoro(props) {
  const history = useHistory();
  const [begin, setBegin] = React.useState();
  const [end, setEnd] = React.useState();
  const [statistic, setStatistic] = React.useState({
    totalHoa: 0,
    totalHour: 0,
    totalReadBook: 0,
    totalBook: 0,
  });
  const [statisticByTime, setStatisByTime] = React.useState({
    count: 0,
    rateCount: 0,
    hoa: 0,
    rateHoa: 0,
    hour: 0,
    rateHour: 0,
  });
  const [data, setData] = React.useState({
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Trước đó",
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#D9D9D9",
        // barThickness: 24,
        // barPercentage: 1,
      },
      {
        label: "Hiện tại",
        data: [0, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#027B76",
        // barThickness: 24,
        // barPercentage: 1,
      },
    ],
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "THỐNG KÊ GIỜ POMODORO THEO NGÀY",
      },
    },
  };

  function handleBeginChange(e) {
    let _begin = e.target.value;
    if (new Date(_begin) < new Date(end)) {
      setBegin(_begin);
      fetchChartReport({ begin: _begin, end });
    }
  }

  function handleEndChange(e) {
    let _end = e.target.value;
    if (new Date(_end) > new Date(begin)) {
      setEnd(_end);
      fetchChartReport({ begin, end: _end });
    }
  }

  function fetchStatistic() {
    userAPI
      .getReportAllTime()
      .then((res) => {
        const { totalHoa, totalHour, totalReadBook, totalBook } = res;
        setStatistic({ totalHoa, totalHour, totalReadBook, totalBook });
      })
      .catch((err) => {
        if (err.response.status === 403) {
          history.push("/login");
        }
      });
  }

  function fetchChartReport({ begin, end }) {
    userAPI
      .postReportByTime({ begin, end })
      .then((res) => {
        const {
          begin,
          end,
          lastBegin,
          lastEnd,
          data,
          count,
          lastCount,
          hoa,
          lastHoa,
          hour,
          lastHour,
          lastData,
        } = res;
        setData({
          labels: data.map(
            (item, index) =>
              data[index].date.slice(0, 5) +
              " - " +
              lastData[index].date.slice(0, 5)
          ),
          datasets: [
            {
              label:
                new Date(lastBegin).toLocaleDateString() +
                " - " +
                new Date(lastEnd).toLocaleDateString(),
              data: lastData.map((item) => item.value),
              backgroundColor: "#D9D9D9",
              // barThickness: 24,
              // barPercentage: 1,
            },
            {
              label:
                new Date(begin).toLocaleDateString() +
                " - " +
                new Date(end).toLocaleDateString(),
              data: data.map((item) => item.value),
              backgroundColor: "#027B76",
              // barThickness: 24,
              // barPercentage: 1,
            },
          ],
        });
        setStatisByTime({
          count,
          rateCount: Math.round((count - lastCount) * 100) / 100,
          hoa,
          rateHoa: Math.round((hoa - lastHoa) * 100) / 100,
          hour,
          rateHour: Math.round((hour - lastHour) * 100) / 100,
        });
      })
      .catch((err) => {
        if (err.response.status === 403) {
          history.push("/login");
        }
      });
  }

  React.useEffect(() => {
    let _end = new Date();
    let _begin = new Date(_end.getTime() - 7 * 24 * 60 * 60 * 1000);
    setBegin(_begin.toISOString().substring(0, 10));
    setEnd(_end.toISOString().substring(0, 10));
    fetchStatistic();
    fetchChartReport({ begin: _begin, end: _end });
  }, []);
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
                <p className="value">{statistic.totalHoa}</p>
                <p className="label">HOA TÌM ĐƯỢC</p>
              </div>
              <FlowerIcon />
            </div>
            <div className="green box">
              <div className="data">
                <p className="value">{statistic.totalHour}H</p>
                <p className="label">POMODORO</p>
              </div>
              <AlarmIcon />
            </div>
            <div className="red box">
              <div className="data">
                <p className="value">
                  {statistic.totalReadBook}
                  <small>/{statistic.totalBook}</small>
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
                  onChange={handleBeginChange}
                />
                <TextField
                  inputProps={{ style: { fontSize: 16 } }}
                  InputLabelProps={{ style: { fontSize: 16 } }}
                  variant="outlined"
                  size="small"
                  id="begin"
                  value={end}
                  label={"Đến"}
                  type={"date"}
                  placeholder={"Thời gian"}
                  error={false}
                  helperText={""}
                  onChange={handleEndChange}
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
                    <p className="value">{statisticByTime.count} lần</p>
                  </div>
                  {statisticByTime.rateCount !== 0 &&
                    (statisticByTime.rateCount > 0 ? (
                      <div className="badge green">
                        <IncreaseIcon />+{Math.abs(statisticByTime.rateCount)}
                      </div>
                    ) : (
                      <div className="badge red">
                        <DecreaseIcon />-{Math.abs(statisticByTime.rateCount)}
                      </div>
                    ))}
                </div>
                <div className="box">
                  <div className="icon-box blue">
                    <LightBulbIcon />
                  </div>
                  <div className="data">
                    <p className="label">POMODORO</p>
                    <p className="value">{statisticByTime.hour} Giờ</p>
                  </div>
                  {statisticByTime.rateHour !== 0 &&
                    (statisticByTime.rateHour > 0 ? (
                      <div className="badge green">
                        <IncreaseIcon />+{Math.abs(statisticByTime.rateHour)}
                      </div>
                    ) : (
                      <div className="badge red">
                        <DecreaseIcon />-{Math.abs(statisticByTime.rateHour)}
                      </div>
                    ))}
                </div>
                <div className="box">
                  <div className="icon-box yellow">
                    <FlowerIcon />
                  </div>
                  <div className="data">
                    <p className="label">Hoa tạo mới</p>
                    <p className="value">{statisticByTime.hoa}</p>
                  </div>
                  {statisticByTime.rateHoa !== 0 &&
                    (statisticByTime.rateHoa > 0 ? (
                      <div className="badge green">
                        <IncreaseIcon />+{Math.abs(statisticByTime.rateHoa)}
                      </div>
                    ) : (
                      <div className="badge red">
                        <DecreaseIcon />-{Math.abs(statisticByTime.rateHoa)}
                      </div>
                    ))}
                </div>
              </div>
              <div className="promodoro-report-chart">
                <Bar options={options} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
