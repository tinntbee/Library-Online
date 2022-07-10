import React, { useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import BookViewCard_loading from "../BookViewCard/bookViewCard_loading";
import "./style.css";

ListBookLoading.propTypes = {};

function ListBookLoading(props) {
  const { name } = props;
  const scrollRef = useRef();
  const [state, setState] = useState({ positionScroll: 0 });

  const onscroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.container.current.scrollWidth;
    const offsetWidth = scrollRef.current.container.current.offsetWidth;
    const positionScroll = scrollLeft / (scrollWidth - offsetWidth);
    console.log({ positionScroll });
    setState({ positionScroll: positionScroll * 100 });
  };
  return (
    <div
      id={name.toLowerCase().replaceAll(" ", "_")}
      className="List-book-view"
    >
      <div className="List-book-view-header">
        <p>{"#" + name.toUpperCase()}</p>
      </div>
      <ScrollContainer
        ref={scrollRef}
        onScroll={onscroll}
        className="List-book-view-body"
      >
        <BookViewCard_loading />
        <BookViewCard_loading />
        <BookViewCard_loading />
        <BookViewCard_loading />
        <BookViewCard_loading />
        <BookViewCard_loading />
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
  );
}

export default ListBookLoading;
