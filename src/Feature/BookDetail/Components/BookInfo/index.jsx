import Skeleton from "@mui/material/Skeleton";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import bookAPI from "../../../../api/bookAPI";
import RateLikeDislike from "../../../../components/RateLikeDislike";
import backdropLoadingAction from "../../../../redux/actions/backdropLoadingAction";
import bookActions from "../../../../redux/actions/bookActions";
import FacebookIcon from "../../../../static/jpg/Facebook.png";
import LinkIcon from "../../../../static/jpg/Link.png";
import MessageIcon from "../../../../static/jpg/Message.png";
import LikeIcon from "../../../../static/LikeIcon";
import ReadIcon from "../../../../static/ReadIcon";
import { useSnackbar } from "notistack";
import BookViewIntro from "../BookViewIntro";
import ConformDialog from "../ConfirmDialog";
import { userActions } from "../../../../redux/actions/userActions";

BookInfo.propTypes = {};

function BookInfo(props) {
  const book = useSelector((state) => state.bookDetail.book);
  const user = useSelector((state) => state.user.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [state, setState] = useState(book);
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    handleSubmit: () => {},
  });
  const handleBuySubmit = async () => {
    setConfirmDialog({ ...confirmDialog, open: false });
    dispatch(backdropLoadingAction.setLoading(true));

    bookAPI
      .buyBook(book.data._id)
      .then((res) => {
        dispatch(backdropLoadingAction.setLoading(false));
        enqueueSnackbar("Thêm vào tủ sách thành công", {
          variant: "success",
        });
        dispatch(bookActions.changeBookDetail({ ...book.data, isHad: true }));
        dispatch(userActions.reSign());
      })
      .catch((e) => {
        dispatch(backdropLoadingAction.setLoading(false));
      });
  };
  const handleBuyAndReadSubmit = async () => {
    setConfirmDialog({ ...confirmDialog, open: false });
    dispatch(backdropLoadingAction.setLoading(true));
    bookAPI
      .buyBook(book.data._id)
      .then((res) => {
        dispatch(backdropLoadingAction.setLoading(false));
        enqueueSnackbar(
          "Thêm vào tủ sách thành công, chuyển hướng đến Không gian đọc",
          {
            variant: "success",
          }
        );
        dispatch(userActions.reSign());
        dispatch(bookActions.changeBookDetail({ ...book.data, isHad: true }));
        history.push("/reading-space?bookId=" + res.book);
      })
      .catch((e) => {
        dispatch(backdropLoadingAction.setLoading(false));
      });
  };
  const likeClickHandle = async () => {
    const data = state.data;
    if (data.react == 1) {
      await bookAPI.removeReact(data._id).then((res) => {
        setState({
          ...state,
          data: {
            ...state.data,
            totalLike: res.totalLike,
            totalDislike: res.totalDislike,
            react: 0,
          },
        });
      });
    } else {
      await bookAPI.likeReact(data._id).then((res) => {
        setState({
          ...state,
          data: {
            ...state.data,
            totalLike: res.totalLike,
            totalDislike: res.totalDislike,
            react: 1,
          },
        });
      });
    }
  };
  const dislikeClickHandle = async () => {
    const data = state.data;
    if (data.react == -1) {
      await bookAPI.removeReact(data._id).then((res) => {
        setState({
          ...state,
          data: {
            ...state.data,
            totalLike: res.totalLike,
            totalDislike: res.totalDislike,
            react: 0,
          },
        });
      });
    } else {
      await bookAPI.dislikeReact(data._id).then((res) => {
        setState({
          ...state,
          data: {
            ...state.data,
            totalLike: res.totalLike,
            totalDislike: res.totalDislike,
            react: -1,
          },
        });
      });
    }
  };
  const handleAddToBookcaseClick = () => {
    setConfirmDialog({
      ...confirmDialog,
      open: true,
      handleSubmit: handleBuySubmit,
    });
  };
  const handleReadNowClick = () => {
    setConfirmDialog({
      ...confirmDialog,
      open: true,
      handleSubmit: handleBuyAndReadSubmit,
    });
  };
  useEffect(() => {
    setState(book);
  }, [book]);
  useEffect(() => {
    dispatch(bookActions.changeBookDetail(state.data));
  }, [state.data]);
  return (
    <div className="Book-information-container Book-detail-container">
      {user && (
        <ConformDialog
          open={confirmDialog.open}
          handleClose={() =>
            setConfirmDialog({ ...confirmDialog, open: false })
          }
          handleSubmit={confirmDialog.handleSubmit}
          data={{
            _id: book.data._id,
            image: book.data.image,
            name: book.data.name,
            price: book.data.price,
            hoa: user.hoa,
            isHad: book.data.isHad,
          }}
        />
      )}
      <div className="Book-information-top">
        <div className="Book-information-top-left">
          {!state.loading ? (
            <>
              <div
                className="Book-thumbnail"
                style={{
                  "--book-thumbnail-url": `url(${state.data.image})`,
                }}
              >
                {state.data.linkIntro && (
                  <BookViewIntro
                    data={{
                      linkIntro: state.data.linkIntro,
                    }}
                  />
                )}
              </div>

              <div className="Book-rate">
                <RateLikeDislike
                  rate={{
                    like: state.data.totalLike,
                    dislike: state.data.totalDislike,
                    react: state.data.react,
                  }}
                  likeClickHandle={likeClickHandle}
                  dislikeClickHandle={dislikeClickHandle}
                />
                <span>Share:</span>
                <img alt="share on facebook" src={FacebookIcon} />
                <img alt="share on message" src={MessageIcon} />
                <img alt="copy link" src={LinkIcon} />
                {state.loading ? null : (
                  <div className="Rate-popup">
                    <Link to="#">
                      <ReadIcon />
                      <p>{state.data.totalRead}</p>
                    </Link>
                    <Link to="#">
                      <LikeIcon />
                      <p>
                        {state.data.totalLike + state.data.totalDislike > 0
                          ? (state.data.totalLike /
                              (state.data.totalLike +
                                state.data.totalDislike)) *
                              100 +
                            "%"
                          : "-"}
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Skeleton
                animation="wave"
                height={500}
                width="80%"
                style={{ marginBottom: 6, borderRadius: 10 }}
                variant="rectangular"
              />
              <Skeleton
                animation="wave"
                height={50}
                width="80%"
                style={{ marginBottom: 25, borderRadius: 10 }}
                variant="rectangular"
              />
            </>
          )}
        </div>

        <div className="Book-information-top-right">
          <div className="Book-title">
            {state.loading ? (
              <Skeleton
                animation="wave"
                height={50}
                width="80%"
                style={{ marginBottom: 6, borderRadius: 10 }}
                variant="rectangular"
              />
            ) : (
              <p className="Book-name">{state.data.name?.toUpperCase()}</p>
            )}
            {state.loading ? (
              <Skeleton
                animation="wave"
                height={20}
                width="10%"
                style={{ marginBottom: 6, borderRadius: 10 }}
                variant="rectangular"
              />
            ) : (
              <p className="Book-price">${state.data.price}</p>
            )}
            <div className="Book-tags">
              {state.loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    height={30}
                    width={100}
                    style={{ marginRight: 10, borderRadius: 10 }}
                    variant="rectangular"
                  />
                  <Skeleton
                    animation="wave"
                    height={30}
                    width={50}
                    style={{ marginRight: 10, borderRadius: 10 }}
                    variant="rectangular"
                  />
                  <Skeleton
                    animation="wave"
                    height={30}
                    width={70}
                    style={{ marginRight: 10, borderRadius: 10 }}
                    variant="rectangular"
                  />
                </>
              ) : (
                <>
                  {state.data.tags &&
                    state.data.tags.map((item, index) => {
                      return (
                        <Link
                          className="book-tag"
                          key={index}
                          to={`/bookstore?tagId=${item._id}`}
                        >
                          {item.name.toUpperCase()}
                        </Link>
                      );
                    })}
                </>
              )}
            </div>
          </div>
          <div className="Book-description">
            {state.loading ? (
              <Skeleton
                animation="wave"
                height={100}
                width="80%"
                style={{ marginBottom: 6, borderRadius: 10 }}
                variant="rectangular"
              />
            ) : (
              <div
                dangerouslySetInnerHTML={{ __html: state.data.description }}
              ></div>
            )}
          </div>
          <div className="Book-action">
            {state.data.isHad ? (
              <>
                <button
                  className="Book-action__read-now button-bee contained"
                  disabled={state.loading}
                  onClick={() => {
                    history.push("/reading-space?bookId=" + state.data._id);
                  }}
                >
                  ĐỌC NGAY
                </button>
              </>
            ) : (
              <>
                <button
                  className="Book-action__read-now button-bee contained"
                  disabled={state.loading}
                  onClick={handleReadNowClick}
                >
                  ĐỌC NGAY
                </button>
                <button
                  className="Book-action__add-to-bookcase button-bee outline"
                  disabled={state.loading}
                  onClick={handleAddToBookcaseClick}
                >
                  THÊM VÀO TỦ SÁCH
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="Book-information-bottom">
        {state.loading ? (
          <>
            <Skeleton
              animation="wave"
              height={30}
              width="90%"
              style={{ marginBottom: 15, borderRadius: 10 }}
              variant="rectangular"
            />
            <Skeleton
              animation="wave"
              height={30}
              width="70%"
              style={{ marginBottom: 15, borderRadius: 10 }}
              variant="rectangular"
            />
            <Skeleton
              animation="wave"
              height={30}
              width="80%"
              style={{ marginBottom: 15, borderRadius: 10 }}
              variant="rectangular"
            />
          </>
        ) : (
          <div className="Book-quote">
            <p>
              {state.data.quote ? (
                state.data.quote
              ) : (
                <>
                  <b>Gia tốc</b> và <b>hấp dẫn</b> chỉ có thể tương đương với
                  nhau nếu một vật thể có khối lượng lớn bẻ cong không thời
                  gian, do đó bẻ cong cả lộ trình của các vật thể xung quanh nó
                  ...
                </>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookInfo;
