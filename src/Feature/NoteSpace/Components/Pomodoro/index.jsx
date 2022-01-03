import React, { useEffect, useState } from "react";
import "./style.scss";

PomodoroMode.propTypes = {};

function PomodoroMode(props) {
  const [stateTimeStep, setStateTimeStep] = useState({
    isRun: false,
    minute: 60,
    second: 0,
  });

  const [valueProgress, setValueProgress] = useState(() => {
    return ((stateTimeStep.minute * 60 + stateTimeStep.second) / 7200) * 100;
  });

  const handleMinuteChange = (value) => {
    if (stateTimeStep.isRun === false) {
      if (parseInt(value) < 0) value = 0;
      if (parseInt(value) > 60) value = 60;
      if (parseInt(value) === 60) {
        setStateTimeStep({ ...stateTimeStep, minute: value, second: 0 });
      } else {
        setStateTimeStep({ ...stateTimeStep, minute: value });
      }
    }
  };

  const handleSecondChange = (value) => {
    if (stateTimeStep.isRun === false) {
      if (parseInt(stateTimeStep.minute) === 60 || parseInt(value) < 0)
        value = 0;
      if (parseInt(value) > 59) value = 59;
      setStateTimeStep({ ...stateTimeStep, second: value });
    }
  };

  const handleStartClick = () => {
    setStateTimeStep({ ...stateTimeStep, isRun: !stateTimeStep.isRun });
    if (stateTimeStep.isRun === false) resetTimeout();
  };

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState === "visible") {
      } else {
        setStateTimeStep({ ...stateTimeStep, isRun: false });
        resetTimeout();
      }
    });
    resetTimeout();
    if (stateTimeStep.isRun) {
      timeoutRef.current = setTimeout(() => {
        let newMinute = stateTimeStep.minute;
        let newSecond = stateTimeStep.second;
        let newIsRun = stateTimeStep.isRun;
        if (parseInt(newSecond) === 0) {
          if (parseInt(newMinute) === 0) {
            newMinute = 0;
            newSecond = 0;
            newIsRun = false;
          } else {
            newMinute = newMinute - 1;
            newSecond = 59;
          }
        } else {
          newSecond = newSecond - 1;
        }
        setStateTimeStep({
          isRun: newIsRun,
          minute: newMinute,
          second: newSecond,
        });
      }, 1000);
    }
    return () => {
      resetTimeout();
    };
  }, [stateTimeStep]);

  useEffect(() => {
    setValueProgress(() => {
      return (
        ((stateTimeStep.minute * 60 + stateTimeStep.second * 1) / 3600) * 100
      );
    });
  }, [stateTimeStep]);

  return (
    <div className="ReadingSpace__PomodoroMode">
      <div className="box">
        <p className="box__title">
          <i>Đi tìm mật hoa thôi nào ^^</i>
        </p>

        <button className="previous-pomodoro-image"></button>
        <button className="next-pomodoro-image"></button>
        <div className="set-time">
          <input
            min="0"
            max="60"
            type="number"
            className="minute"
            disabled={stateTimeStep.isRun}
            value={stateTimeStep.minute}
            onChange={(event) => handleMinuteChange(event.target.value)}
          />
          <p className="unit">
            <i>PHÚT</i>
          </p>
          <p className="two-dots">:</p>
          <input
            type="number"
            min="0"
            max="59"
            className="second"
            disabled={stateTimeStep.isRun}
            value={stateTimeStep.second}
            onChange={(event) => handleSecondChange(event.target.value)}
          />
          <p className="unit">
            <i>GIÂY</i>
          </p>
        </div>
      </div>
      <svg
        class="pomodoro-default"
        x="0px"
        y="0px"
        viewBox="0 0 776 628"
        overflow="hidden"
        fill="none"
      >
        <defs>
          <clipPath id="svg-draw">
            <path d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
            <path d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
          </clipPath>
        </defs>
        <image
          clip-path="url(#svg-draw)"
          href="/pomodoro-default.jpg"
          width="100%"
          height="100%"
        />
        <path
          class="track"
          d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
        ></path>
        <path
          class="fill"
          d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
        ></path>
      </svg>
      <svg
        class="progress blue noselect"
        data-progress={valueProgress}
        x="0px"
        y="0px"
        viewBox="0 0 776 628"
        style={{ "--data-progress": valueProgress }}
        overflow="hidden"
        fill="none"
        onClick={handleStartClick}
      >
        <defs>
          <clipPath id="svg-draw">
            <path d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
            <path d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"></path>
          </clipPath>
        </defs>
        <image
          clip-path="url(#svg-draw)"
          href="/pomodoro-demo.png"
          width="100%"
          height="100%"
        />
        <path
          class="track"
          d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
        ></path>
        <path
          class="fill"
          d="M723 314L543 625.77 183 625.77 3 314 183 2.23 543 2.23 723 314z"
        ></path>
      </svg>
    </div>
  );
}

export default PomodoroMode;
