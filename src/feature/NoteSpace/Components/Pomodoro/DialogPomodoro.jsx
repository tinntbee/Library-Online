import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import React from "react";
import "./style.scss";

DialogPomodoro.propTypes = {
  open: PropTypes.bool,
  variant: PropTypes.string,
  hoa: PropTypes.number,
  totalHoa: PropTypes.number,
  handleClose: PropTypes.func,
  minute: PropTypes.number,
};

DialogPomodoro.defaultProps = {
  open: false,
  variant: "warning",
  hoa: 0,
  totalHoa: 0,
  handleClose: () => {},
  minute: 20,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogPomodoro(props) {
  const { open, variant, hoa, totalHoa, handleClose, minute } = props;
  const getColor = () => {
    if (variant === "warning") {
      return "#185f74";
    } else {
      return "#f9b700";
    }
  };
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className={"dialog-pomodoro"}
      style={{ "--color": getColor() }}
    >
      {variant === "warning" ? (
        <>
          <DialogTitle className="dialog-pomodoro__title">
            <b className="text-color">THÔNG BÁO</b>
          </DialogTitle>
          <DialogContent className="dialog-pomodoro__content">
            <div className="dialog-pomodoro__icons">
              <div
                className="icons__left"
                style={{
                  backgroundImage: `url("../../../../icons/ic_sad.svg")`,
                }}
              />
              <div
                className="icons__center"
                style={{
                  backgroundImage: `url("../../../../icons/ic_sad.svg")`,
                }}
              />
              <div
                className="icons__right"
                style={{
                  backgroundImage: `url("../../../../icons/ic_sad.svg")`,
                }}
              />
            </div>
            <p>
              Bạn đã rời đi trong khi <b>POMODORO</b> chưa hoàn thành, điều này
              làm ảnh hưởng đến hiệu quả.
            </p>
            <br />
            <p>
              <b>POMODORO</b> đã được <b className="text-color">Đặt lại</b>
            </p>
          </DialogContent>
        </>
      ) : (
        <>
          <DialogTitle className="dialog-pomodoro__title">
            <b className="text-color">CHÚC MỪNG</b>
          </DialogTitle>
          <DialogContent className="dialog-pomodoro__content">
            <div className="dialog-pomodoro__icons">
              <div
                className="icons__left"
                style={{
                  backgroundImage: `url("../../../../icons/ic_fun.svg")`,
                }}
              />
              <div
                className="icons__center"
                style={{
                  backgroundImage: `url("../../../../icons/ic_fun.svg")`,
                }}
              />
              <div
                className="icons__right"
                style={{
                  backgroundImage: `url("../../../../icons/ic_fun.svg")`,
                }}
              />
            </div>
            <p>
              Bạn đã Hoàn thành <b>POMODORO</b> với thời gian{" "}
              <b>{minute} PHÚT</b>, và đã thu hoạch được{" "}
              <b className="text-color">{hoa} HOA</b>
            </p>
            <br />
            <p>
              Số hoa hiện tại của bạn là:{" "}
              <b className="text-color">{totalHoa} HOA</b>
            </p>
          </DialogContent>
        </>
      )}
      <DialogActions className="dialog-pomodoro__actions">
        <button className="dialog-pomodoro__btn" onClick={handleClose}>Đã hiểu</button>
      </DialogActions>
      <button className="dialog-pomodoro__btn-close" onClick={handleClose}/>
    </Dialog>
  );
}

export default DialogPomodoro;
