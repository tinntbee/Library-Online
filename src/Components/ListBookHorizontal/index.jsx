import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import BookViewCard from "../BookViewCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import BookViewCard_loading from "../BookViewCard/bookViewCard_loading";
import { useDispatch } from "react-redux";
import bookActions from "../../redux/actions/bookActions";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ListBookLoading from "./ListBookLoading";
import LazyLoad from "react-lazyload";

ListBookHorizontal.propTypes = {};

function ListBookHorizontal(props) {
  const { data } = props;
  const _idTag = data._id;
  // console.log(_idTag);
  const booksByTags = useSelector((state) =>
    state.bookStore.booksByTags.data.find((item) => item._id === _idTag)
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!booksByTags) {
      dispatch(bookActions.getBooksByTags(_idTag));
    }
  }, []);
  const scrollRef = useRef();
  const [state, setState] = useState({ positionScroll: 0 });

  const onscroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.container.current.scrollWidth;
    const offsetWidth = scrollRef.current.container.current.offsetWidth;
    const positionScroll = scrollLeft / (scrollWidth - offsetWidth);
    // console.log({ positionScroll });
    setState({ positionScroll: positionScroll * 100 });
  };

  return (
    booksByTags?.books.length !== 0 && (
      <div
        id={data.name.toLowerCase().replaceAll(" ", "_")}
        className="List-book-view"
      >
        <div className="List-book-view-header">
          <p>{"#" + data.name.toUpperCase()}</p>
        </div>
        <ScrollContainer
          ref={scrollRef}
          onScroll={onscroll}
          className="List-book-view-body"
        >
          {booksByTags ? (
            booksByTags.books.map((item, index) => {
              return <BookViewCard key={index} data={item} />;
            })
          ) : (
            <>
              <BookViewCard_loading />
              <BookViewCard_loading />
              <BookViewCard_loading />
              <BookViewCard_loading />
              <BookViewCard_loading />
              <BookViewCard_loading />
            </>
          )}
        </ScrollContainer>
        <div className="List-book-view-footer">
          <div
            className="List-book-view-position-scroll-bar"
            style={{
              backgroundSize: state.positionScroll + "%",
            }}
          ></div>
        </div>
      </div>
    )
  );
}

export default ListBookHorizontal;
