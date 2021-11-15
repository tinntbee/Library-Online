import React, { useState } from "react";
import "./style.css";
import BookViewCard from "../../Components/BookViewCard";
import ScrollContainer from "react-indiana-drag-scroll";

ListBookHorizontal.propTypes = {};

function ListBookHorizontal(props) {
  const scrollRef = React.createRef();
  const [state, setState] = useState({ positionScroll: 0 });
  console.log(props.books);

  onscroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const scrollWidth = scrollRef.current.container.current.scrollWidth;
    const offsetWidth = scrollRef.current.container.current.offsetWidth;
    const positionScroll = scrollLeft / (scrollWidth - offsetWidth);
    console.log(positionScroll);
    setState({ positionScroll: positionScroll * 100 });
  };
  return (
    <div
      id={props.id}
      className="List-book-view"
      style={{ "--color": props.color}}
    >
      <div className="List-book-view-header">
        <p>{props.title.toUpperCase()}</p>
      </div>
      <ScrollContainer
        ref={scrollRef}
        onScroll={onscroll}
        className="List-book-view-body"
      >
        {props.books.map((item, index) => {
          return <BookViewCard key={index} data={item} />;
        })}
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

export default ListBookHorizontal;
