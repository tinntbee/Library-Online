import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bookAPI from "../../api/bookAPI";
import RateLikeDislike from "../../components/RateLikeDislike";
import FacebookIcon from "../../static/jpg/Facebook.png";
import LinkIcon from "../../static/jpg/Link.png";
import MessageIcon from "../../static/jpg/Message.png";
import LikeIcon from "../../static/LikeIcon";
import ReadIcon from "../../static/ReadIcon";
import ToTopIcon from "../../static/ToTopIcon";
import Forum from "./Components/Forum";
import Recommend from "./Components/Recommend";
import "./style.css";
import { useLocation, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

BookDetail.propTypes = {};

function BookDetail(props) {
  const { id } = useParams();
  console.log({ id });
  const [state, setState] = useState({ loading: true, data: {} });
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const params = { _id: id };
        const res = await bookAPI.getBook(params);
        setState({ ...state, loading: false, data: res });
      } catch (e) {
        console.log({ e });
      }
    };
    fetchBook();
  }, []);

  const [buttonScrollTop, setButtonScrollTop] = useState(false);
  const toggleVisible = () => {
    const scrolled = scrollTopRef.current.scrollTop;
    if (scrolled > 300) {
      setButtonScrollTop(true);
    } else if (scrolled <= 300) {
      setButtonScrollTop(false);
    }
  };

  const scrollTopRef = React.createRef();
  const onClickHandle = () => {
    console.log(scrollTopRef.current.scrollTop);
    scrollTopRef.current.scrollTop = 0;
  };
  return (
    <>
      <div className="Book-detail main-content">
        <div className="header">
          <p className="title">BOOK DETAIL</p>
          <p className="hoa">$34</p>
        </div>
        <div className="body">
          <div
            className="body-content"
            onScroll={() => toggleVisible()}
            ref={scrollTopRef}
          >
            <div className="Book-information-container Book-detail-container">
              <div className="Book-information-top">
                <div className="Book-information-top-left">
                  {!state.loading ? (
                    <>
                      <div
                        className="Book-thumbnail"
                        style={{
                          "--book-thumbnail-url": `url(${state.data.image})`,
                        }}
                      />

                      <div className="Book-rate">
                        <RateLikeDislike />
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
                                {(state.data.like /
                                  (state.data.like + state.data.dislike)) *
                                  100}
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
                      <p className="Book-name">
                        {state.data.name.toUpperCase()}
                      </p>
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
                                  to={item.path}
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
                      <>
                        {state.data.description}
                      </>
                    )}
                  </div>
                  <div className="Book-action">
                    <button
                      className="Book-action__read-now"
                      disabled={state.loading}
                    >
                      READ NOW
                    </button>
                    <button
                      className="Book-action__add-to-bookcase"
                      disabled={state.loading}
                    >
                      ADD TO BOOKCASE
                    </button>
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
                      <b>Gia tốc</b> và <b>hấp dẫn</b> chỉ có thể tương đương
                      với nhau nếu một vật thể có khối lượng lớn bẻ cong không
                      thời gian, do đó bẻ cong cả lộ trình của các vật thể xung
                      quanh nó ...
                    </p>
                  </div>
                )}
              </div>
            </div>

            {!state.loading ? (
              <>
                <Forum />

                <Recommend data={state.data.tags} />
              </>
            ) : null}
          </div>
          <div
            onClick={() => onClickHandle()}
            className={classNames({
              "go-top": true,
              active: buttonScrollTop,
            })}
          >
            <ToTopIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetail;
