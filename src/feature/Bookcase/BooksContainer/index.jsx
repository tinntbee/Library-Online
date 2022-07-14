import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ScrollContainer from "react-indiana-drag-scroll";
import "./style.scss";
import BookViewBox from "../BookViewBox";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import bookAPI from "../../../api/bookAPI";
import { useDispatch } from "react-redux";
import dialogAction from "../../../redux/actions/dialogAction";
import { snackBarActions } from "../../../redux/actions/snackBarActions";
import noteAction from "../../../redux/actions/noteAction";
import { removeVieCharacters } from "../../../utils/removeVie";

BooksContainer.propTypes = {};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function BooksContainer(props) {
  const [state, setState] = useState({
    showToolbar: false,
    data: null,
  });
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([false]);
  const [filter, setFilter] = useState("");

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
    if (newChecked === undefined || newChecked.length === 0) {
      return false;
    }
    return newChecked.reduce(
      (accumulator, currentValue) => accumulator && currentValue
    );
  };
  const calculateIndeterminate = (newChecked) => {
    if (newChecked === undefined || newChecked.length === 0) {
      return false;
    }
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

  const fetchDelete = async ({ _id, name }) => {
    await bookAPI
      .removeBookInBookcase(_id)
      .then((res) => {
        dispatch(
          snackBarActions.open({
            message: `Xóa '${name}' thành công khỏi tủ sách!`,
            variant: "success",
          })
        );
      })
      .catch((err) => {
        dispatch(
          snackBarActions.open({
            message: "Có lỗi sảy ra, xóa thất bại!",
            variant: "error",
          })
        );
      });
  };

  const handleDeleteClick = async () => {
    dispatch(
      dialogAction.open({
        title: "Xóa Sách khỏi thư viện?",
        message:
          "Bạn có chắc chắn muốn xóa những quyển sách này (bao gồm các Note của chúng) khỏi tủ sách không?",
        actions: [
          {
            name: "Xóa",
            callback: async () => {
              for (let index = 0; index < state.data.length; index++) {
                const element = checked[index];
                if (element) {
                  await fetchDelete(state.data[index].book);
                }
              }
              fetchData();
              handleCloseToolbar();
              dispatch(noteAction.getNotesActive());
            },
          },
        ],
      })
    );
  };

  const handleFilterChange = (e) => {
    setFilter(removeVieCharacters(e.target.value));
  };

  const fetchData = async () => {
    bookAPI
      .getBooksInBookcase()
      .then((res) => {
        setChecked(Array(res.length).fill(false));
        setState({ ...state, showToolbar: false, data: res });
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
          <span>SÁCH</span>
        </div>
        <div className="container__header__search">
          <input type="text" onChange={handleFilterChange} />
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
          <div className="delete" onClick={handleDeleteClick}>
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
                  item.book && removeVieCharacters(item.book.name).includes(filter) && (
                    <BookViewBox
                      key={item._id}
                      index={index}
                      data={item}
                      checked={checked[index]}
                      handleCheckBoxOnChange={handleCheckBoxOnChange}
                    />
                  )
                );
              })}
          </div>
        </ScrollContainer>
      </div>
    </div>
  );
}

export default BooksContainer;
