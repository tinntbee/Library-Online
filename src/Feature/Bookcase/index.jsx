import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import BooksContainer from "./BooksContainer";
import NotesContainer from "./NotesContainer";
import classNames from "classnames";

Bookcase.propTypes = {};

function Bookcase(props) {
  const data = {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/public%2Fsystem%2FDSC_2530.JPG?alt=media&token=2eaf5d51-1b63-4e22-8152-e756036876bf",
  };
  const [thumbnail, setThumbnail] = useState({
    file: undefined,
    url: data.thumbnail,
    isShow: false,
  });
  const handleThumbnailChange = (e) => {
    var file = e.target.files[0];
    var url = URL.createObjectURL(file);
    setThumbnail({ ...thumbnail, isShow: true, url: url, file: file });
    return () => URL.revokeObjectURL(url);
  };
  const handleThumbnailCancelOnClick = () => {
    setThumbnail({ ...thumbnail, isShow: false, url: data.thumbnail });
  };
  const handleThumbnailSaveOnClick = () => {
    setThumbnail({ ...thumbnail, isShow: false });
  };
  return (
    <div className="bookcase main-content">
      <div className="header">
        <p className="title">BOOKCASE</p>
        <p className="hoa">$34</p>
      </div>
      <div className="body">
        <div
          className={classNames({
            "thumbnail-change-actions": true,
            active: thumbnail.isShow,
          })}
        >
          <button className="cancel" onClick={handleThumbnailCancelOnClick}>
            Hủy
          </button>
          <button className="save" onClick={handleThumbnailSaveOnClick}>
            Lưu thay đổi
          </button>
        </div>
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${thumbnail.url})` }}
        />
        <div className="content">
          <div className="spacing">
            <div className="intro">
              <p>
                Tủ sách này của nhà bạn <b>BEE</b> đó ^^
              </p>
            </div>
            <div
              className="camera"
              style={{ backgroundImage: "url('icons/camera.svg')" }}
              title="Thay đổi ảnh bìa"
            >
              <input type="file" onChange={handleThumbnailChange} />
            </div>
          </div>
          <BooksContainer />
          <NotesContainer />
        </div>
      </div>
    </div>
  );
}

export default Bookcase;
