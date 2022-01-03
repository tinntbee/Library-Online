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
  const [books, setBooks] = useState([
    {
      _id: 1,
      image: "https://images.thuvienpdf.com/r3KxA0.webp",
    },
    {
      _id: 2,
      image: "https://images.thuvienpdf.com/lOFB9Ai9Gt.webp",
    },
    {
      _id: 3,
      image: "https://images.thuvienpdf.com/lflbuEXwK6.webp",
    },
    {
      _id: 4,
      image: "https://images.thuvienpdf.com/FTxes93cAK.webp",
    },
    {
      _id: 5,
      image: "https://images.thuvienpdf.com/Vidg87kBH8.webp",
    },
    {
      _id: 6,
      image: "https://images.thuvienpdf.com/ZA2ravzxbk.webp",
    },
    {
      _id: 7,
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
    },
    {
      _id: 8,
      image: "https://images.thuvienpdf.com/lhtcZTRsdW.webp",
    },
    {
      _id: 9,
      image: "https://images.thuvienpdf.com/xXT3chV4Pm.webp",
    },
    {
      _id: 10,
      image: "https://images.thuvienpdf.com/7WqRAWOX8l.webp",
    },
  ]);
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
        const newBooks = res.map(function (obj) {
          return { _id: obj.book._id, image: obj.book.image };
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
