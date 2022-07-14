import React, { useState } from "react";
import PropTypes from "prop-types";
import { MyBooksContainer } from "../style";
import "./style.scss";
import { useEffect } from "react";
import bookAPI from "../../../api/bookAPI";

MyBooks.propTypes = {};

function MyBooks(props) {
  const createArray = (n) => {
    let array = [];
    for (let i = 1; i <= n; i++) {
      array.push(i);
    }
    return array;
  };
  const [books, setBooks] = useState([]);
  const [state, setState] = useState(createArray(books.length));

  const delayAutoSlide = 2000;
  function rotateArray(rotate = 1) {
    if (books.length >= 5) {
      if (rotate > 0) {
        const newState = [...state];
        newState.unshift(newState.pop());
        setState(newState);
      }
      if (rotate < 0) {
        const newState = [...state];
        newState.push(newState.shift());
        setState(newState);
      }
    }
  }

  // auto slideshow
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => rotateArray(1), delayAutoSlide);

    return () => {
      resetTimeout();
    };
  }, [state]);

  useEffect(() => {
    bookAPI
      .getBooksInBookcase()
      .then((res) => {
        console.log(res);
        const newBooks = [];
        res.forEach((bookInBookcase) => {
          if (bookInBookcase.book) {
            newBooks.push(bookInBookcase.book);
          }
        });
        setBooks([...newBooks]);
        setState(createArray(newBooks.length));
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);
  return (
    <MyBooksContainer className="mybook-slideshow">
      {books &&
        books.map((item, index) => {
          return (
            <div
              key={index}
              style={{ background: `url(${item.image})` }}
              className={
                "book-position__" + (state[index] <= 5 ? state[index] : 6)
              }
            />
          );
        })}
    </MyBooksContainer>
  );
}

export default MyBooks;
