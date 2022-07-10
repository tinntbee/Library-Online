import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDispatch, useSelector } from "react-redux";
import dialogAction from "../../redux/actions/dialogAction";

DialogBox.propTypes = {};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DialogBox(props) {
  const dialogBox = useSelector((state) => state.dialogBox);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch(
      dialogAction.open({
        title: "hello",
        message: "message here",
        actions: [
          () => {
            alert("hello");
          },
        ],
      })
    );
  };

  const handleClose = () => {
    dispatch(dialogAction.close());
  };

  const handleClick = (callback) => {
    dispatch(dialogAction.close());
    callback();
  };

  return (
    <Dialog
      open={dialogBox.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      className={"my-dialog-box"}
    >
      <DialogTitle>{dialogBox.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {dialogBox.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Hủy</Button>
        {dialogBox.actions &&
          dialogBox.actions.map((item, index) => {
            return (
              <Button
                onClick={() => {
                  handleClick(item.callback);
                }}
              >
                {item.name}
              </Button>
            );
          })}
      </DialogActions>
    </Dialog>
  );
}

export default DialogBox;
