import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import bookAPI from "../../api/bookAPI";
import bookActions from "../../redux/actions/bookActions";
import { commentActions } from "../../redux/actions/commentAction";
import ToTopIcon from "../../static/ToTopIcon";
import BookInfo from "./Components/BookInfo";
import Forum from "./Components/Forum";
import Recommend from "./Components/Recommend";
import "./style.scss";

BookDetail.propTypes = {};

function BookDetail(props) {
  const history = useHistory();
  const { id } = useParams();
  const [_id, set_id] = useState(id);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const bookDetail = useSelector((state) => state.bookDetail.book);

  useEffect(() => {
    dispatch(bookActions.getBookDetail(_id));
    dispatch(commentActions.get(_id));
  }, [_id]);

  history.listen(function (location) {
    set_id(location.pathname.substring(13));
  });

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
          <p className="hoa">{user?.hoa ? "$" + user.hoa : ""}</p>
        </div>
        <div className="body">
          <div
            className="body-content"
            onScroll={() => toggleVisible()}
            ref={scrollTopRef}
          >
            <BookInfo state={bookDetail} />

            {!bookDetail.loading && (
              <>
                <Forum />

                <Recommend data={bookDetail.data.tags} />
              </>
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
