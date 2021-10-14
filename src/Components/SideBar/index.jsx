import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlashcardIcon from "../../static/FlashcardIcon";
import LibraryIcon from "../../static/LibraryIcon";
import MusicIcon from "../../static/MusicIcon";
import PomodoroIcon from "../../static/PomodoroIcon";
import ReadIcon from "../../static/ReadIcon";
import "./style.css";

SideBar.propTypes = {};

function SideBar(props) {
  const data = {
    accountInfo: {
      avatarURL:
        "https://scontent.fvca1-3.fna.fbcdn.net/v/t1.6435-9/243027416_3138938306431058_4725055277341185435_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=qFuOHPJoZF8AX-OL5i2&_nc_ht=scontent.fvca1-3.fna&oh=bf52b87ccfb78acdb46e7f70dcfbe730&oe=618BEFB4",
      fullName: "Nguyễn Trung Tín",
      mailAddress: "trungtin27132000@gmail.com",
    },
    notes: [
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
    ],
    flashcards: [
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
    ],
    books: [
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        title: "Vũ trụ trong vỏ hạt dẻ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
      {
        thumbnail:
          "https://vnwriter.net/wp-content/uploads/2017/11/sach-co-hai-con-meo-ngoi-ben-cua-so.jpg",
        title: "Có 2 con mèo ngồi bên cửa sổ",
        description: "Vũ trụ trong vỏ hạt dẻ - stephen hawking",
        path: "#",
      },
    ],
  };

  const tabClickHandle = (index) => {
    setState({
      tab: index,
      controller: 0,
    });
  };

  const [state, setState] = useState({
    tab: 1,
    controller: 0,
  });

  return (
    <div className="Sidebar">
      <div className="Sidebar-header">
        <img
          className="Sidebar-header-avatar"
          src={data.accountInfo.avatarURL}
          alt=""
        />
        <p className="Sidebar-header-fullName">{data.accountInfo.fullName}</p>
        <p className="Sidebar-header-mailAddress">
          {data.accountInfo.mailAddress}
        </p>
      </div>
      <div className="Sidebar-body">
        <div className="Sidebar-controls">
          <ul>
            <li className="Sidebar-control active">
              <ReadIcon />
              <span>Reading Space</span>
            </li>
            <li className="Sidebar-control">
              <LibraryIcon />
              <span>Bookstore</span>
            </li>
            <li className="Sidebar-control">
              <MusicIcon />
              <span>Music</span>
            </li>
            <li className="Sidebar-control">
              <FlashcardIcon />
              <span>Flashcard</span>
            </li>
            <li className="Sidebar-control">
              <PomodoroIcon />
              <span>Pomodoro</span>
            </li>
            <li className="Sidebar-control-active"></li>
          </ul>
        </div>
        <div className="Sidebar-tabs">
          <ul className="Sidebar-tabs-list">
            {/* notes */}
            <li className="Sidebar-tabs-title">
              <p>NOTES</p>
            </li>

            {data.notes.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "Sidebar-tab": true,
                    active: index === state.tab - 1,
                  })}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      tabClickHandle(index + 1);
                    }}
                  >
                    <img
                      alt=""
                      className="Sidebar-tab-thumbnail"
                      src={item.thumbnail}
                    />
                    <div>
                      <p className="Sidebar-tab-title">{item.title}</p>
                      <p className="Sidebar-tab-description">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}

            {/* flashcard */}
            <li className="Sidebar-tabs-title">
              <p>FLASH CARDS</p>
            </li>

            {data.flashcards.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "Sidebar-tab": true,
                    active: index === state.tab - 2 - data.notes.length,
                  })}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      tabClickHandle(index + 2 + data.notes.length);
                    }}
                  >
                    <img
                      alt=""
                      className="Sidebar-tab-thumbnail"
                      src={item.thumbnail}
                    />
                    <div>
                      <p className="Sidebar-tab-title">{item.title}</p>
                      <p className="Sidebar-tab-description">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}

            {/* books */}
            <li className="Sidebar-tabs-title">
              <p>BOOKS</p>
            </li>

            {data.books.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "Sidebar-tab": true,
                    active:
                      index ===
                      state.tab -
                        3 -
                        data.notes.length -
                        data.flashcards.length,
                  })}
                >
                  <Link
                    to={item.path}
                    onClick={() => {
                      tabClickHandle(
                        index + 3 + data.notes.length + data.flashcards.length
                      );
                    }}
                  >
                    <img
                      alt=""
                      className="Sidebar-tab-thumbnail"
                      src={item.thumbnail}
                    />
                    <div>
                      <p className="Sidebar-tab-title">{item.title}</p>
                      <p className="Sidebar-tab-description">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}

            <li
              style={{ "--value": state.tab }}
              className="Sidebar-tab-active"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
