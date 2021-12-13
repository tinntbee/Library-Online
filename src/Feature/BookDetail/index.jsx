import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import bookAPI from "../../api/bookAPI";
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
  const [state, setState] = useState({ loading: true, data: {} });

  const fetchBook = async () => {
    try {
      setState({ ...state, loading: true });
      const res = await bookAPI.getById(_id);
      setState({ ...state, loading: false, data: res });
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    fetchBook();
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
          <p className="hoa">$34</p>
        </div>
        <div className="body">
          <div
            className="body-content"
            onScroll={() => toggleVisible()}
            ref={scrollTopRef}
          >
            <BookInfo state={state} />

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
