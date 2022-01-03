import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import FlashcardIcon from "../../static/FlashcardIcon";
import LibraryIcon from "../../static/LibraryIcon";
import MusicIcon from "../../static/MusicIcon";
import PomodoroIcon from "../../static/PomodoroIcon";
import ReadIcon from "../../static/ReadIcon";
import "./style.css";
import { useHistory } from "react-router-dom";
import { userActions } from "../../redux/actions/userActions";
import noteAction from "../../redux/actions/noteAction";

SideBar.propTypes = {};

function SideBar(props) {
  const notes = useSelector((state) => state.notes);
  const { id } = useParams();
  const pagesList = [
    "reading-space",
    "bookstore",
    "bookcase",
    "flash-card",
    "pomodoro",
  ];

  const [pageCurrent, setPageCurrent] = useState("book-store");
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
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

  const setLocationActive = (pathname) => {
    for (const element of pagesList) {
      if (pathname.includes(element)) {
        setPageCurrent(element);
        return;
      }
      if (pathname.includes("note-space")) {
        
      }
    }
    setPageCurrent("none");
  };

  history.listen(function (location) {
    setLocationActive(location.pathname);
  });

  useEffect(() => {
    dispatch(noteAction.getNotesActive());
    setLocationActive(window.location.pathname);
    if (!user) {
      dispatch(userActions.reSign());
    }
  }, []);

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
              <span>Reading Space</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "bookstore",
              })}
              onClick={() => history.replace("/bookstore")}
            >
              <LibraryIcon />
              <span>Bookstore</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "bookcase",
              })}
              onClick={() => history.replace("/bookcase")}
            >
              <MusicIcon />
              <span>Bookcase</span>
            </li>
            <li
              className={classNames({
                "Sidebar-control": true,
                active: pageCurrent === "flash-card",
              })}
            >
              <FlashcardIcon />
              <span>Flashcard</span>
            </li>
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
            <li className="Sidebar-tabs-title">
              <p>NOTES</p>
            </li>

            {notes.notes?.map((item, index) => {
              return (
                <li
                  key={item._id}
                  className={classNames({
                    "Sidebar-tab": true,
                    active: index === state.tab - 1,
                  })}
                >
                  <Link
                    to={"/note-space/" + item._id}
                    onClick={() => {
                      tabClickHandle(index + 1);
                    }}
                  >
                    <img
                      alt=""
                      className="Sidebar-tab-thumbnail"
                      src={item.image}
                    />
                    <div>
                      <p className="Sidebar-tab-title">{item.name}</p>
                      <p className="Sidebar-tab-description">
                        {item.book.name}
                      </p>
                    </div>
                  </Link>
                </li>
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
