import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.scss";
import BookViewBox from "../BookViewBox";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import bookAPI from "../../../api/bookAPI";

BooksContainer.propTypes = {};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BooksContainer(props) {
  const [state, setState] = useState({
    showToolbar: false,
    data: null,
  });
  const [checked, setChecked] = useState([false]);
  const handleCheckBoxOnChange = (value) => {
    let newChecked = [...checked];
    newChecked[value.index] = value.isChecked;
    setChecked([...newChecked]);
    if (!state.showToolbar) {
      setState({
        ...state,
        showToolbar: true,
      });
    }
  };
  const calculateCheckAll = (newChecked) => {
    return newChecked.reduce(
      (accumulator, currentValue) => accumulator && currentValue
    );
  };
  const calculateIndeterminate = (newChecked) => {
    return (
      newChecked.reduce(
        (accumulator, currentValue) => accumulator || currentValue
      ) ^
      newChecked.reduce(
        (accumulator, currentValue) => accumulator && currentValue
      )
    );
  };

  const handleCloseToolbar = () => {
    setChecked(Array(state.data.length).fill(false));
    setState({ ...state, showToolbar: false });
  };

  const handleCheckAllChange = (e) => {
    setChecked(Array(state.data.length).fill(e.target.checked));
  };

  const fetchData = async () => {
    bookAPI
      .getBooksInBookcase()
      .then((res) => {
        setChecked(Array(res.length).fill(false));
        setState({ ...state, data: res });
      })
      .catch((e) => {
        console.log({ e });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

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
            checked={calculateCheckAll(checked)}
            indeterminate={calculateIndeterminate(checked)}
            sx={{
              color: "#FFFFFF",
              "&.Mui-checked": {
                color: "#FFFFFF",
              },
              "&.MuiCheckbox-indeterminate": {
                color: "#FFFFFF",
              },
            }}
            onChange={handleCheckAllChange}
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
                    checked={checked[index]}
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
