import React, { useEffect, useState } from "react";
import noteAPI from "../../../../api/noteAPI";
import { useDispatch, useSelector } from "react-redux";
import DialogPomodoro from "./DialogPomodoro";
import "./style.scss";
import { snackBarActions } from "../../../../redux/actions/snackBarActions";

PomodoroMode.propTypes = {};

function PomodoroMode(props) {
  const dispatch = useDispatch();
  const [stateTimeStep, setStateTimeStep] = useState({
    isRun: false,
    minute: 60,
    second: 0,
    goal: 0,
  });
  const [dialog, setDialog] = useState({ open: false });
  const handleDialogClose = () => {
    setDialog({ ...dialog, open: false });
  };

  const [valueProgress, setValueProgress] = useState(() => {
    return ((stateTimeStep.minute * 60 + stateTimeStep.second) / 7200) * 100;
  });

  const handleMinuteChange = (event) => {
    let value = event.target.value;
    if (stateTimeStep.isRun === false) {
      if (!value) value = 5;
      if (parseInt(value) < 5) value = 5;
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
    if (stateTimeStep.isRun) {
      if (stateTimeStep.goal < 5) {
        setStateTimeStep({
          ...stateTimeStep,
          isRun: false,
          minute: 5,
          second: 0,
          goal: 5,
        });
      } else {
        setStateTimeStep({
          ...stateTimeStep,
          isRun: false,
          minute: stateTimeStep.goal,
          second: 0,
        });
      }
    } else {
      setStateTimeStep({
        ...stateTimeStep,
        isRun: true,
        goal: stateTimeStep.minute,
      });
    }
    resetTimeout();
  };

  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const resetPomodoro = (e) => {
    if (document.visibilityState === "visible") {
    } else {
      if (stateTimeStep.isRun) {
        setDialog({ ...dialog, open: true, variant: "warning" });
        setStateTimeStep({
          ...stateTimeStep,
          isRun: false,
          minute: stateTimeStep.goal,
          second: 0,
        });
        resetTimeout();
      }
    }
  };

  const completePomodoro = (goal) => {
    noteAPI
      .completePomodoro(goal)
      .then((res) => {
        setDialog({
          ...dialog,
          open: true,
          variant: "congratulations",
          hoa: res.hoa,
          totalHoa: res.totalHoa,
          minute: goal,
        });
      })
      .catch((err) => {
        dispatch(
          snackBarActions.open({
            message: `Có lỗi sảy ra, không thể lấy được Hoa !`,
            variant: "warning",
          })
        );
      });
  };

  useEffect(() => {
    resetTimeout();
    if (stateTimeStep.isRun) {
      timeoutRef.current = setTimeout(() => {
        let newMinute = stateTimeStep.minute;
        let newSecond = stateTimeStep.second;
        let newIsRun = stateTimeStep.isRun;
        let goal = stateTimeStep.goal;
        if (parseInt(newSecond) === 0) {
          if (parseInt(newMinute) === 0) {
            newMinute = goal;
            newSecond = 0;
            newIsRun = false;
            completePomodoro(stateTimeStep.goal);
            goal = 0;
          } else {
            newMinute = newMinute - 1;
            newSecond = 59;
          }
        } else {
          newSecond = newSecond - 1;
        }
        setStateTimeStep({
          ...stateTimeStep,
          isRun: newIsRun,
          minute: newMinute,
          second: newSecond,
          goal: goal,
        });
      }, 1000);
    }
    setValueProgress(() => {
      return (
        ((stateTimeStep.minute * 60 + stateTimeStep.second * 1) / 3600) * 100
      );
    });
    return () => {
      resetTimeout();
    };
  }, [stateTimeStep]);

  useEffect(() => {
    window.addEventListener("visibilitychange", resetPomodoro);

    return () => {
      window.removeEventListener("visibilitychange", resetPomodoro);
    };
  }, [stateTimeStep]);

  // useEffect(() => {
  //   completePomodoro(20);
  // }, []);

  return (
    <div className="ReadingSpace__PomodoroMode">
      <DialogPomodoro
        variant={dialog.variant}
        hoa={dialog.hoa}
        totalHoa={dialog.totalHoa}
        open={dialog.open}
        handleClose={handleDialogClose}
        minute={dialog.minute}
      />
      <div className="box">
        <p className="box__title">
          {stateTimeStep.isRun ? (
            <i>Đang tìm hoa, chăm chỉ quá đi!</i>
          ) : (
            <i>Đi tìm mật hoa thôi nào ^^</i>
          )}
        </p>

        <button className="previous-pomodoro-image"></button>
        <button className="next-pomodoro-image"></button>
        <div className="set-time">
          <input
            min="5"
            max="60"
            type="number"
            className="minute"
            disabled={stateTimeStep.isRun}
            value={stateTimeStep.minute}
            onChange={handleMinuteChange}
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
            disabled={true}
            value={stateTimeStep.second}
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
