import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import noteAPI from "../../../api/noteAPI";
import NotesViewBox from "../NotesViewBox";
import "./style.scss";

NotesContainer.propTypes = {};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function NotesContainer(props) {
  const [state, setState] = useState({
    showToolbar: false,
    data: [],
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
    console.log({ newChecked });
  };
  const calculateCheckAll = (newChecked) => {
    return checked.length > 0
      ? newChecked.reduce(
          (accumulator, currentValue) => accumulator && currentValue
        )
      : false;
  };
  const calculateIndeterminate = (newChecked) => {
    return checked.length > 0
      ? newChecked.reduce(
          (accumulator, currentValue) => accumulator || currentValue
        ) ^
          newChecked.reduce(
            (accumulator, currentValue) => accumulator && currentValue
          )
      : false;
  };

  const handleCloseToolbar = () => {
    setChecked(Array(state.data.length).fill(false));
    setState({ ...state, showToolbar: false });
  };

  const handleCheckAllChange = (e) => {
    setChecked(Array(state.data.length).fill(e.target.checked));
  };

  const fetchData = () => {
    noteAPI
      .getNotesInBookcase()
      .then((res) => {
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
