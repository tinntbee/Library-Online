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
            {!state.loading ? (
              <>
                <div className="Book-information-container Book-detail-container">
                  <div className="Book-information-top">
                    <div className="Book-information-top-left">
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
                      </div>
                    </div>
                    <div className="Book-information-top-right">
                      <div className="Book-title">
                        <p className="Book-name">
                          {state.data.name.toUpperCase()}
                        </p>
                        <p className="Book-price">${state.data.price}</p>
                        <div className="Book-tags">
                          {state.data.tags.map((item, index) => {
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
                        </div>
                      </div>
                      <div className="Book-description">
                        <p>
                          Tác giả: <b>Stephen hawking</b>
                        </p>
                        <p>
                          Xuất bản: <b>2019</b>
                        </p>
                        <p>
                          Tái bản: <b>2020</b>
                        </p>
                        <p>
                          Nhà xuất bản: <b>Kim đồng</b>
                        </p>
                      </div>
                      <div className="Book-action">
                        <button className="Book-action__read-now">
                          READ NOW
                        </button>
                        <button className="Book-action__add-to-bookcase">
                          ADD TO BOOKCASE
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="Book-information-bottom">
                    <div className="Book-quote">
                      <p>
                        <b>Gia tốc</b> và <b>hấp dẫn</b> chỉ có thể tương đương
                        với nhau nếu một vật thể có khối lượng lớn bẻ cong không
                        thời gian, do đó bẻ cong cả lộ trình của các vật thể
                        xung quanh nó ...
                      </p>
                    </div>
                  </div>
                </div>

                <Forum />

                <Recommend data={state.data.tags} />
              </>
            ) : (
              <p>loading</p>
            )}
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
