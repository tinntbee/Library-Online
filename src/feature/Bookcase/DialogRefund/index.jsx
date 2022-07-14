import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
import React from "react";
import "./style.scss";

DialogRefund.propTypes = {
  open: PropTypes.bool,
  hoa: PropTypes.number,
  totalHoa: PropTypes.number,
  handleClose: PropTypes.func,
  bookNumber: PropTypes.number,
};

DialogRefund.defaultProps = {
  open: false,
  hoa: 0,
  totalHoa: 0,
  handleClose: () => {},
  bookNumber: 0,
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogRefund(props) {
  const { open, hoa, totalHoa, handleClose, bookNumber } = props;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className={"dialog-refund"}
      style={{ "--color": "#f9b700" }}
    >
      <DialogTitle className="dialog-pomodoro__title">
        <b className="text-color">THÔNG BÁO</b>
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
          Bạn đọc hoàn thành thêm <b>{bookNumber} QUYỂN SÁCH</b>, Giỏi quá
          thưởng bạn <b className="text-color">{hoa} HOA</b> nha ^^
        </p>
        <br />
        <p>
          Số hoa hiện tại của bạn là:{" "}
          <b className="text-color">{totalHoa} HOA</b>
        </p>
      </DialogContent>
      <DialogActions className="dialog-pomodoro__actions">
        <button className="dialog-pomodoro__btn" onClick={handleClose}>
          Đã hiểu
        </button>
      </DialogActions>
      <button className="dialog-pomodoro__btn-close" onClick={handleClose} />
    </Dialog>
  );
}

export default DialogRefund;
