import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import NotesViewBox from "../NotesViewBox";
import "./style.scss";

NotesContainer.propTypes = {};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function NotesContainer(props) {
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
  const [checked, setChecked] = useState(Array(data.length).fill(false));
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
    console.log({ newChecked });
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
    setChecked(Array(data.length).fill(false));
    setState({ ...state, showToolbar: false });
  };

  const handleCheckAllChange = (e) => {
    setChecked(Array(data.length).fill(e.target.checked));
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
          <span>My Notes</span>
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
                  <NotesViewBox
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

export default NotesContainer;
