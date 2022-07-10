import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import RateLikeDislike from "../RateLikeDislike";
import ReplyIcon from "../../static/LikeIcon copy";
import ReplyComment from "../ReplyComment";
import classNames from "classnames";
import axiosClient from "../../api/axiosClient";
import commentAPI from "../../api/commentAPI";
import replyAPI from "../../api/replyAPI";
import { useSelector } from "react-redux";

Comment.propTypes = {};

function Comment(props) {
  const { handleRemove } = props;
  const [data, setData] = useState(props.data);
  const [replies, setReplies] = useState([]);
  const yourReplyInputRef = useRef();
  const [replyVisible, setReplyVisible] = useState(false);
  const [yourReplyVisible, setYourReplyVisible] = useState(false);
  const [state, setState] = useState({ content: "Quan điểm của mình..." });
  const user = useSelector((state) => state.user.user);

  async function fetchReplies(commentId) {
    const url = "/replies/getRepliesByCommentId/" + commentId;
    axiosClient
      .get(url)
      .then((res) => {
        setReplies(res);
      })
      .catch((e) => console.log({ e }));
  }

  function showReplyHandle() {
    setReplyVisible(!replyVisible);
  }
  const handleReply = () => {
    setYourReplyVisible(!yourReplyVisible);
  };
  const likeClickHandle = async () => {
    if (data.react == 1) {
      await commentAPI.removeReact(data._id).then((res) => {
        setData({
          ...data,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 0,
        });
      });
    } else {
      await commentAPI.likeReact(data._id).then((res) => {
        setData({
          ...data,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 1,
        });
      });
    }
  };
  const dislikeClickHandle = async () => {
    if (data.react == -1) {
      await commentAPI.removeReact(data._id).then((res) => {
        setData({
          ...data,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: 0,
        });
      });
    } else {
      await commentAPI.dislikeReact(data._id).then((res) => {
        setData({
          ...data,
          totalLike: res.totalLike,
          totalDislike: res.totalDislike,
          react: -1,
        });
      });
    }
  };
  const handleSubmitClick = async () => {
    await replyAPI
      .post({ content: state.content, commentId: data._id })
      .then((res) => {
        let repliesList = [...data.replies];
        repliesList.unshift(res._id);
        console.log({ repliesList });
        setData({
          ...data,
          replies: [...repliesList],
        });

        setState({ ...state, content: "" });
        setYourReplyVisible(false);
        setReplyVisible(true);
        replyAPI.get(res._id).then((res) => {
          let newReplies = [...replies];
          newReplies.splice(0, 0, {
            ...res,
          });
          setReplies([...newReplies]);
        });
      })
      .catch((e) => console.log({ e }));
  };
  useEffect(() => {
    if (yourReplyInputRef.current) {
      yourReplyInputRef.current.focus();
    }
  }, [yourReplyVisible]);
  useEffect(() => {
    if (replyVisible) {
      fetchReplies(data._id);
    }
  }, [replyVisible]);
  return (
    <div className="Comment">
      <p
        className={
          "Comment-tag " +
          (data.type === 1 ? "like" : data.type === -1 ? "dislike" : "")
        }
      >
        <b>{data.type === 1 ? "like" : data.type === -1 ? "dislike" : ""}</b>
      </p>
      <div className="Comment-content">
        <p>{data.content}</p>
      </div>
      <div className="Comment-footer">
        <div className="Comment-footer-left">
          {
            <RateLikeDislike
              rate={{
                like: data.totalLike,
                dislike: data.totalDislike,
                react: data.react,
              }}
              likeClickHandle={likeClickHandle}
              dislikeClickHandle={dislikeClickHandle}
            />
          }
        </div>
        <div className="Comment-footer-right">
          <p onClick={handleReply}>{yourReplyVisible ? "Hủy" : "Phản hồi"}</p>
          <div className="dot" />
          {data.replies.length > 0 ? (
            !replyVisible ? (
              <>
                <ReplyIcon />{" "}
                <p onClick={showReplyHandle}>
                  {data.replies.length + " Phản hồi"}
                </p>
              </>
            ) : (
              <p onClick={showReplyHandle}>Thu gọn</p>
            )
          ) : (
            <p>Chưa có phản hồi</p>
          )}
          <div className="dot" />
          {user && user._id === data.user._id && (
            <>
              <p onClick={handleRemove}>Xóa bình luận</p>
              <div className="dot" />
            </>
          )}
          <p>{data.createdAt}</p>
        </div>
      </div>

      {yourReplyVisible && (
        <div className="your-reply">
          <p>Trả lời @{data.user.nickname ? data.nickname : data.user.name}</p>
          <dìv className="your-reply__content">
            <textarea
              ref={yourReplyInputRef}
              value={state.content}
              onChange={(e) => {
                setState({ ...state, content: e.target.value });
              }}
            ></textarea>
            <button className="btn-send" onClick={handleSubmitClick}>
              Đăng tải
            </button>
          </dìv>
        </div>
      )}

      <div
        className={classNames({
          "reply-comments": true,
        })}
      >
        {replies && replyVisible && (
          <>
            {replies.map((item, index) => {
              return <ReplyComment data={item} key={item._id} />;
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Comment;
