import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../../../api/axiosClient";
import commentAPI from "../../../../api/commentAPI";
import userAPI from "../../../../api/userAPI";
import backdropLoadingAction from "../../../../redux/actions/backdropLoadingAction";
import { commentActions } from "../../../../redux/actions/commentAction";
import CheckIcon from "../../../../static/ChecklIcon";
import HoaIcon from "../../../../static/HoaIcon";
import ReadIcon from "../../../../static/ReadIcon";
import "./style.scss";

YourComment.propTypes = {};

function YourComment(props) {
  const book = useSelector((state) => state.bookDetail.book.data);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "Ý kiến của bạn",
  });
  const [user, setUser] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const fetchUserInfo = async (bookId) => {
    await userAPI
      .getUserInfoForForum(bookId)
      .then((res) => setUser(res))
      .catch((e) => console.log({ e }));
  };

  const handleContentOnchange = (e) => {
    setState({ ...state, content: e.target.value });
  };

  const fetchNewComment = async (_id) => {
    await commentAPI
      .get(_id)
      .then((res) => {
        dispatch(commentActions.post(res));
      })
      .catch((e) => console.log({ e }));
  };

  const handlePostNewComment = async () => {
    dispatch(backdropLoadingAction.setLoading(true));
    const req = {
      book: book._id,
      content: state.content,
      type: book.react,
    };
    const url = "/comments";
    await axiosClient
      .post(url, req)
      .then(async (res) => {
        setState({ ...state, content: "" });
        console.log({ res });
        await fetchNewComment(res._id);
        dispatch(backdropLoadingAction.setLoading(false));
      })
      .catch((e) => {
        console.log({ e });
        dispatch(backdropLoadingAction.setLoading(false));
      });
  };

  useEffect(() => {
    fetchUserInfo(book._id);
  }, []);
  return (
    <>
      {user && (
        <div className="your-comment">
          <div className="your-comment__left">
            <div className="Comment">
              <p
                className={
                  "Comment-tag " +
                  (book.react === 1
                    ? "like"
                    : book.react === -1
                    ? "dislike"
                    : "")
                }
              >
                <b>
                  {book.react === 1
                    ? "like"
                    : book.react === -1
                    ? "dislike"
                    : ""}
                </b>
              </p>
              <div className="Comment-content">
                <textarea
                  className="your-comment-content"
                  value={state?.content}
                  onChange={handleContentOnchange}
                ></textarea>
              </div>
              <button
                className="btn-send"
                disabled={state.content.length <= 0}
                onClick={handlePostNewComment}
              >
                Đăng tải
              </button>
            </div>
          </div>
          <div className="your-comment__right">
            <div className="user-information">
              <div
                className="user-avatar"
                style={{
                  "--status": 1,
                  backgroundImage: `url(${user.avatar})`,
                }}
              />
              <p className="full-name">
                {user.nickname ? user.nickname : user.name}
              </p>
              <p className="id">
                {"@" + user.email.substring(0, user.email.lastIndexOf("@"))}
              </p>
            </div>
            <div className="user-detail">
              <p>
                <ReadIcon />
                Đã đọc: {user.totalBooks} quyển sách
              </p>

              <p>
                <HoaIcon />
                Tích lũy: {user.hoa} hoa
              </p>

              {user.isRead && (
                <p>
                  <CheckIcon />
                  <b>Đã đọc quyển sách này</b>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YourComment;
