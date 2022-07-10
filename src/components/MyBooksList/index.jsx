import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.scss";

MyBooksList.propTypes = {
  books: PropTypes.string.isRequired,
};

MyBooksList.defaultProps = {
  books: [
    {
      book: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fimages%2Fbong-ma.jpg?alt=media&token=4ac521b1-a06c-4a9f-94cc-2b6e2411a9b9",
        name: "Bóng ma trên mạng",
        tags: ["61b982ae3cd1052a8febe8fd", "61b04f18e18da5dcfee885a3"],
        _id: "61b0543b2f70b0b493e80310",
      },
      progress: 30,
      user: "61a3adb54e66dcd7283d89be",
      _id: "61b773e513bb058c4d8a879d",
    },
    {
      book: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fimages%2Fbong-ma.jpg?alt=media&token=4ac521b1-a06c-4a9f-94cc-2b6e2411a9b9",
        name: "Bóng ma trên mạng",
        tags: ["61b982ae3cd1052a8febe8fd", "61b04f18e18da5dcfee885a3"],
        _id: "61b0543b2f70b0b493e80310",
      },
      progress: 30,
      user: "61a3adb54e66dcd7283d89be",
      _id: "61b773f513bb058c4d8a879d",
    },
    {
      book: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fimages%2Fbong-ma.jpg?alt=media&token=4ac521b1-a06c-4a9f-94cc-2b6e2411a9b9",
        name: "Bóng ma trên mạng",
        tags: ["61b982ae3cd1052a8febe8fd", "61b04f18e18da5dcfee885a3"],
        _id: "61b0543b2f70b0b493e80310",
      },
      progress: 30,
      user: "61a3adb54e66dcd7283d89be",
      _id: "61b774e513bb058c4d8a879d",
    },
    {
      book: {
        image:
          "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fimages%2Fbong-ma.jpg?alt=media&token=4ac521b1-a06c-4a9f-94cc-2b6e2411a9b9",
        name: "Bóng ma trên mạng",
        tags: ["61b982ae3cd1052a8febe8fd", "61b04f18e18da5dcfee885a3"],
        _id: "61b0543b2f70b0b493e80310",
      },
      progress: 30,
      user: "61a3adb54e66dcd7283d89be",
      _id: "61b473e513bb058c4d8a879d",
    },
  ],
};

function MyBooksList(props) {
  const { books } = props;
  const scrollRef = useRef();
  const [state, setState] = useState({ positionScroll: 0 });

  const history = useHistory();

  const onscroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.container.current.scrollWidth;
    const offsetWidth = scrollRef.current.container.current.offsetWidth;
    const positionScroll = scrollLeft / (scrollWidth - offsetWidth);
    // console.log({ positionScroll });
    setState({ positionScroll: positionScroll * 100 });
  };

  return (
    <div className="my-books-list">
      <div className="my-books-list__actions">
        <div
          className="go-to-bookstore"
          onClick={() => {
            history.push("/bookstore");
          }}
        >
          <div className="add-icon-button" />
          <p>Xem thêm sách</p>
        </div>
        <div
          className="go-to-bookcase"
          onClick={() => {
            history.push("/bookcase");
          }}
        >
          <p>Đi đến tủ sách</p>
        </div>
      </div>
      <div className="my-books-list__books">
        <ScrollContainer
          ref={scrollRef}
          onScroll={onscroll}
          className="list-book-horizontal"
        >
          {books &&
            books.map((item, index) => {
              return (
                <div
                  key={item._id}
                  className="book-view-box"
                  style={{ backgroundImage: `url(${item.book.image})` }}
                >
                  <div
                    className="detail"
                    onClick={() =>
                      history.push(`/book-detail/${item.book._id}`)
                    }
                  >
                    <Box sx={{ position: "relative", display: "inline-flex" }}>
                      <CircularProgress
                        sx={{ color: "#fff" }}
                        variant="determinate"
                        value={item.progress}
                      />
                      <Box
                        sx={{
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          position: "absolute",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="caption"
                          component="div"
                          color="#FFF"
                        >
                          {`${item.progress}%`}
                        </Typography>
                      </Box>
                    </Box>
                    <p className="name">{item.book.name}</p>
                  </div>
                  <button
                    className="read-btn"
                    onClick={() => {
                      history.push("/reading-space?bookId=" + item.book._id);
                    }}
                  >
                    Đọc ngay
                  </button>
                </div>
              );
            })}
        </ScrollContainer>
        <div
          className="list-book-position"
          style={{
            backgroundSize: state.positionScroll + "%",
          }}
        />
      </div>
    </div>
  );
}

export default MyBooksList;
