import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FlashcardIcon from "../../static/FlashcardIcon";
import LibraryIcon from "../../static/LibraryIcon";
import MusicIcon from "../../static/MusicIcon";
import PomodoroIcon from "../../static/PomodoroIcon";
import ReadIcon from "../../static/ReadIcon";
import "./style.scss";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { userActions } from "../../redux/actions/userActions";
import noteAction from "../../redux/actions/noteAction";

SideBar.propTypes = {};

function SideBar(props) {
  const notes = useSelector((state) => state.notes);
  const [noteActive, setNoteActive] = useState(-1);
  const pagesList = [
    "reading-space",
    "bookstore",
    "bookcase",
    // "flash-card",
    "pomodoro",
  ];

  const [pageCurrent, setPageCurrent] = useState("book-store");
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const tabClickHandle = (index) => {
    setState({
      tab: index,
      controller: 0,
    });
  };

  const [state, setState] = useState({
    tab: -1,
    controller: 0,
  });

  const handleUserClick = () => {
    history.push("/account");
  };

  const handleCloseTabClick = ({ _id, index }) => {
    if (noteActive === index) {
      if (notes.notes.length > 1) {
        if (index > 0) {
          history.push("/note-space/" + notes.notes[index - 1]._id);
        } else {
          history.push("/note-space/" + notes.notes[index + 1]._id);
        }
      } else {
        history.push("/bookcase");
      }
    }
    dispatch(noteAction.closeNote(_id));
  };

  const setLocationActive = (pathname) => {
    for (const element of pagesList) {
      if (pathname.includes(element)) {
        setPageCurrent(element);
        return;
      }
      if (pathname.includes("note-space")) {
        for (let index = 0; index < notes.notes.length; index++) {
          const element = notes.notes[index];
          if (pathname.includes(element._id)) {
            setState({ ...state, tab: index + 1 });
            setNoteActive(index);
            break;
          }
        }
      } else {
        setState({ ...state, tab: -1 });
        setNoteActive(-1);
      }
    }
    setPageCurrent("none");
  };

  history.listen(function (location) {
    setLocationActive(location.pathname);
  });

  useEffect(() => {
    dispatch(noteAction.getNotesActive());
    if (!user) {
      dispatch(userActions.reSign());
    } else {
    }
  }, []);

  useEffect(() => {
    setLocationActive(window.location.pathname);
  }, [notes.notes.length]);

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <div
          className="Sidebar-header-avatar"
          style={user && { backgroundImage: `url(${user.avatar})` }}
          alt=""
        />
        {user ? (
          <>
            <p className="Sidebar-header-fullName" onClick={handleUserClick}>
              {user && user.name}
            </p>
            <p className="Sidebar-header-mailAddress">{user && user.email}</p>
          </>
        ) : (
          <button
            className="Sidebar-header-login-btn button-bee contained"
            onClick={() => {
              history.push("/login");
            }}
          >
            Đăng nhập
          </button>
        )}
      </div>
      <div className="Sidebar-body">
        <div className="Sidebar-controls">
          <ul>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "reading-space",
              })}
              onClick={() => history.replace("/reading-space")}
            >
              <ReadIcon />
              <span>Không gian đọc</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "bookstore",
              })}
              onClick={() => history.replace("/bookstore")}
            >
              <LibraryIcon />
              <span>Thư viện</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "bookcase",
              })}
              onClick={() => history.replace("/bookcase")}
            >
              <MusicIcon />
              <span>Tủ sách</span>
            </li>
            {/* <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "flash-card",
              })}
            >
              <FlashcardIcon />
              <span>Flashcard</span>
            </li> */}
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "pomodoro",
              })}
              onClick={() => history.replace("/pomodoro")}
            >
              <PomodoroIcon />
              <span>Pomodoro</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control-active": true,
                hidden: pagesList.indexOf(pageCurrent) === -1,
              })}
              style={{
                "--position": `${pagesList.indexOf(pageCurrent) * 44}px`,
              }}
            ></li>
          </ul>
        </div>
        <div className="Sidebar-tabs">
          <ul className="Sidebar-tabs-list">
            {/* notes */}
            {notes.notes?.length > 0 && (
              <li className="Sidebar-tabs-title">
                <p>NOTES</p>
              </li>
            )}
            {notes.notes?.map((item, index) => {
              return (
                item.book && (
                  <li
                    key={item._id}
                    className={classNames({
                      "Sidebar-tab": true,
                      active: index === state.tab - 1,
                    })}
                  >
                    <Link to="#">
                      <div
                        className="Sidebar-tab-thumbnail"
                        style={{ backgroundImage: `url("${item.image}")` }}
                        onClick={() =>
                          handleCloseTabClick({ _id: item._id, index: index })
                        }
                      />
                      <div
                        onClick={() => {
                          history.push("/note-space/" + item._id);
                          tabClickHandle(index + 1);
                        }}
                      >
                        <p className="Sidebar-tab-title">{item.name}</p>
                        <p className="Sidebar-tab-description">
                          {item.book.name}
                        </p>
                      </div>
                    </Link>
                  </li>
                )
              );
            })}

            {state.tab !== -1 && (
              <li
                style={{ "--value": state.tab }}
                className="Sidebar-tab-active"
              ></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
