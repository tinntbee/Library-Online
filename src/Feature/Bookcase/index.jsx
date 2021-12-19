import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import BooksContainer from "./BooksContainer";
import NotesContainer from "./NotesContainer";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import userAPI from "../../api/userAPI";
import backdropLoadingAction from "../../redux/actions/backdropLoadingAction";
import { filesService } from "../../service/firebase/filesService";
import { useSnackbar } from "notistack";

Bookcase.propTypes = {};

function Bookcase(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [bookcase, setBookcase] = useState();
  const [thumbnail, setThumbnail] = useState({
    file: undefined,
    url: bookcase?.thumbnail,
    isShow: false,
  });
  const user = useSelector((state) => state.user.user);
  const handleThumbnailChange = (e) => {
    var file = e.target.files[0];
    var url = URL.createObjectURL(file);
    setThumbnail({ ...thumbnail, isShow: true, url: url, file: file });
    return () => URL.revokeObjectURL(url);
  };
  const handleThumbnailCancelOnClick = () => {
    setThumbnail({
      ...thumbnail,
      isShow: false,
      url: bookcase?.thumbnail,
    });
  };
  const handleThumbnailSaveOnClick = async () => {
    setThumbnail({ ...thumbnail, isShow: false });
    //NOTE: upload firebase
    const path = `/public/user-${user._id}/covers/${Date.now()}`;
    const file = thumbnail.file;
    const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (acceptedImageTypes.includes(file.type)) {
      const url = await filesService.uploadTaskPromise(path, file);
      if (url) {
        userAPI
          .putChangeCover(url)
          .then((res) => {
            enqueueSnackbar("Thay đổi bìa thành công", { variant: "success" });
          })
          .catch((e) => {
            console.log({ e });
            enqueueSnackbar("Có lỗi đã sảy ra :<", { variant: "error" });
          });
      }
    }
  };
  const fetchBookcase = async () => {
    dispatch(backdropLoadingAction.setLoading(true));
    userAPI
      .getBookcase()
      .then((res) => {
        setBookcase(res);
        setThumbnail({ ...thumbnail, url: res.cover });
        dispatch(backdropLoadingAction.setLoading(false));
      })
      .catch((e) => {
        console.log({ e });
        history.push("/login");
        dispatch(backdropLoadingAction.setLoading(false));
      });
  };
  useEffect(() => {
    fetchBookcase();
  }, []);
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
        {bookcase && (
          <div className="content">
            <div className="spacing">
              <div className="intro">
                <p>
                  Tủ sách này của nhà bạn{" "}
                  <b>{bookcase.nickname ? bookcase.nickname : bookcase.name}</b>{" "}
                  đó ^^
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
        )}
      </div>
    </div>
  );
}

export default Bookcase;
