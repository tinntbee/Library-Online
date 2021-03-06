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
import DialogRefund from "./DialogRefund";
import { userActions } from "../../redux/actions/userActions";

Bookcase.propTypes = {};

function Bookcase(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [bookcase, setBookcase] = useState();
  const [thumbnail, setThumbnail] = useState({
    file: undefined,
    url: bookcase?.cover,
    isShow: false,
  });
  const [dialog, setDialog] = useState({ open: false });

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
      url: bookcase?.cover,
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
            enqueueSnackbar("Thay ?????i b??a th??nh c??ng", { variant: "success" });
          })
          .catch((e) => {
            console.log({ e });
            enqueueSnackbar("C?? l???i ???? s???y ra :<", { variant: "error" });
          });
      }
    }
  };
  const handleDialogClose = () => {
    setDialog({ ...dialog, open: false });
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
  const getBookRefund = async () => {
    userAPI
      .bookRefund()
      .then((res) => {
        const { hoa, totalHoa, bookNumber } = res;
        if (bookNumber !== 0) {
          setDialog({ ...dialog, hoa, totalHoa, bookNumber, open: true });
          dispatch(userActions.reSign());
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  useEffect(() => {
    fetchBookcase();
    getBookRefund();
  }, []);
  return (
    <div className="bookcase main-content">
      <DialogRefund
        open={dialog.open}
        hoa={dialog.hoa}
        totalHoa={dialog.totalHoa}
        bookNumber={dialog.bookNumber}
        handleClose={handleDialogClose}
      />
      <div className="header">
        <p className="title">T??? S??CH C?? NH??N</p>
        <p className="hoa">
          <b>${user?.hoa}</b>
        </p>
      </div>
      <div className="body">
        <div
          className={classNames({
            "thumbnail-change-actions": true,
            active: thumbnail.isShow,
          })}
        >
          <button className="cancel" onClick={handleThumbnailCancelOnClick}>
            H???y
          </button>
          <button className="save" onClick={handleThumbnailSaveOnClick}>
            L??u thay ?????i
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
                  T??? s??ch n??y c???a nh?? b???n{" "}
                  <b>{bookcase.nickname ? bookcase.nickname : bookcase.name}</b>{" "}
                  ???? ^^
                </p>
              </div>
              <div
                className="camera"
                style={{ backgroundImage: "url('icons/camera.svg')" }}
                title="Thay ?????i ???nh b??a"
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
