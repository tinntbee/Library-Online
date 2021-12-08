import React, { useState } from "react";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.scss";
import BookViewBox from "../BookViewBox";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";

BooksContainer.propTypes = {};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BooksContainer(props) {
  const data = [
    {
      _id: 1,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 2,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 1,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 2,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 1,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 2,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 1,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 2,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 1,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
    {
      _id: 2,
      name: "abc",
      image: "https://images.thuvienpdf.com/aVzFPuIS00.webp",
      checked: false,
    },
  ];
  const [state, setState] = useState({
    showToolbar: false,
    data: data,
  });
  const handleCheckBoxOnChange = (value) => {
    console.log(value);
    let newData = [...state.data];
    newData[value.index].checked = value.checked;
    setState({ ...state, showToolbar: true, data: [...newData] });
  };

  const handleCloseToolbar = () => {
    let newData = [...state.data];
    newData.forEach((element) => {
      element.checked = false;
    });
    setState({ ...state, showToolbar: false, data: [...newData] });
  };

  return (
    <div className="container">
      <div
        className={classNames({
          container__header: true,
          active: state.showToolbar,
        })}
      >
        <div className="container__header__title">
          <img alt="" src="icons/book.svg" />
          <span>My Books</span>
        </div>
        <div className="container__header__search">
          <input type="text" />
          <button style={{ backgroundImage: `url("icons/search.svg")` }} />
        </div>
        <div className="tools-bar">
          <Checkbox
            {...label}
            defaultChecked
            sx={{
              color: "#FFFFFF",
              "&.Mui-checked": {
                color: "#FFFFFF",
              },
            }}
          />
          <div className="delete">
            <img alt="" src="icons/delete-orange.svg" />
            <span>Xóa</span>
          </div>
          <button className="exit" onClick={handleCloseToolbar}>
            Thoát
          </button>
        </div>
      </div>
      <div className="container__body">
        <ScrollContainer className="scroll-view-horizontal">
          <div>
            {state.data &&
              state.data.map((item, index) => {
                return (
                  <BookViewBox
                    key={index}
                    index={index}
                    data={item}
                    handleCheckBoxOnChange={handleCheckBoxOnChange}
                  />
                );
              })}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}

export default BooksContainer;
