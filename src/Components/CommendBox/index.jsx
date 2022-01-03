import React from "react";
import CheckIcon from "../../static/ChecklIcon";
import HoaIcon from "../../static/HoaIcon";
import ReadIcon from "../../static/ReadIcon";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../Comment";
import "./style.css";
import dialogAction from "../../redux/actions/dialogAction";
import commentAPI from "../../api/commentAPI";
import { commentActions } from "../../redux/actions/commentAction";
import { snackBarActions } from "../../redux/actions/snackBarActions";

CommendBox.propTypes = {};

function CommendBox(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(
      dialogAction.open({
        title: "Xóa bình luận?",
        message: "Bạn có chắc chắn muốn xóa bình luận này không?",
        actions: [
          {
            name: "Xóa",
            callback: () => {
              commentAPI
                .delete(data._id)
                .then((res) => {
                  dispatch(commentActions.remove(data._id));
                  dispatch(
                    snackBarActions.open({
                      message: "Xóa bình luận thành công!",
                      variant: "success",
                    })
                  );
                })
                .catch((err) => {
                  dispatch(
                    snackBarActions.open({
                      message: "Có lỗi sảy ra, xóa thất bại!",
                      variant: "error",
                    })
                  );
                });
            },
          },
        ],
      })
    );
  };
  return (
    <div className="Commend-box">
      <div className="Commend-box-left">
        {data && <Comment data={data} handleRemove={handleRemove} />}
      </div>
      <div className="Commend-box-right">
        <div className="user-information">
          <div
            className="user-avatar"
            style={{
              "--status": 0,
              backgroundImage: `url(${data.user.avatar})`,
            }}
          />
          <p className="full-name">
            {data.user.nickname ? data.user.nickname : data.user.name}
          </p>
          {"@" + data.user.email.substring(0, data.user.email.lastIndexOf("@"))}
        </div>
        <div className="user-detail">
          <p>
            <ReadIcon />
            Đã đọc: {data.user.totalBooks} quyển sách
          </p>

          <p>
            <HoaIcon />
            Tích lũy: {data.user.hoa} hoa
          </p>
          {data.user.isRead && (
            <p>
              <CheckIcon />
              <b>Đã đọc quyển sách này</b>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommendBox;
