import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import { snackBarActions } from "../../redux/actions/snackBarActions";

SnackbarCustom.propTypes = {};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackbarCustom(props) {
  const dispatch = useDispatch();
  const snackBar = useSelector((state) => state.snackBar);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(snackBarActions.close());
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={snackBar.open}
      autoHideDuration={snackBar.autoHideDuration}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackBar.variant}
        sx={{ width: "100%" }}
      >
        {snackBar.message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarCustom;
