import { Fade, Modal } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

ConfirmDialog.propTypes = {
  data: PropTypes.object,
  handleSubmit: PropTypes.func,
  open: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
  data: {
    _id: "hsdfgvdsfgbdsu",
    image: "fdgdfg",
    name: "Khoa học và cuộc sống",
    price: 30,
    hoa: 60,
    isHad: false,
  },
  open: true,
};

function ConfirmDialog(props) {
  const { data, open, handleClose, handleSubmit } = props;
  console.log({ data });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={open}>
        <div className="confirm-dialog">
          <div className="confirm-dialog__header">
            <p className="confirm-dialog__title">XÁC NHẬN ?</p>
          </div>
          <div className="confirm-dialog__body">
            <div className="left">
              <div
                className="book-thumbnail"
                style={{ backgroundImage: `url(${data.image})` }}
              />
            </div>
            <div className="right">
              <div className="content">
                <p className="name">{data.name}</p>
                <p className="price">
                  {data.price > 0 ? "$" + data.price : "Miễn phí"}
                </p>
                {data.isHad ? (
                  <p className="message">
                    <i>
                      Bé đã được bạn rước về{" "}
                      <Link to="/bookcase">
                        <u>tủ sách</u>
                      </Link>{" "}
                      rồi đó !!
                    </i>
                  </p>
                ) : data.price == 0 ? (
                  <p className="message">
                    <i>Bé này miễn phí cho bạn, sở hữu ngay thôi ^^</i>
                  </p>
                ) : data.hoa >= data.price ? (
                  <p className="message">
                    <i>Bạn có ${data.hoa}, sở hữu bé ngay thôi nào ^^</i>
                  </p>
                ) : (
                  <p className="message">
                    <i>{"Có vẻ như bạn chưa đủ hoa để sở hữu bé mất rồi :("}</i>
                  </p>
                )}
              </div>
              <div className="actions">
                <button className="cancel" onClick={handleClose}>
                  Hủy
                </button>
                {!data.isHad && data.price <= data.hoa && (
                  <button
                    className="buy button-bee contained"
                    onClick={handleSubmit}
                  >
                    Thanh toán
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default ConfirmDialog;
