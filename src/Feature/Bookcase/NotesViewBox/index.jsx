import { Fade, IconButton, Modal, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import noteAPI from "../../../api/noteAPI";
import noteAction from "../../../redux/actions/noteAction";
import { filesService } from "../../../service/firebase/filesService";
import PenIcon from "../../../static/PenIcon";
import "./style.scss";

NotesViewBox.propTypes = {};

function NotesViewBox(props) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCreateNoteForm({
      file: null,
      url: data.image,
      title: data.name,
    });
    setOpen(false);
  };

  const { data, handleCheckBoxOnChange, index, checked } = props;
  const [state, setState] = useState(data);
  const handleCheckBoxChange = (e) => {
    handleCheckBoxOnChange({ index: index, isChecked: !checked });
  };
  const [createNoteForm, setCreateNoteForm] = useState({
    file: null,
    url: data.image,
    name: data.name,
  });
  const handleTitleChange = (e) => {
    setCreateNoteForm({ ...createNoteForm, name: e.target.value });
  };
  const handleThumbnailChange = (e) => {
    var file = e.target.files[0];
    var url = URL.createObjectURL(file);
    setCreateNoteForm({ ...createNoteForm, url: url, file: file });
    return () => URL.revokeObjectURL(url);
  };
  const handleSaveChange = async () => {
    setOpen(false);
    //NOTE: save image if have
    let url = createNoteForm.url;
    if (createNoteForm.file) {
      const path = `/public/user-${user._id}/note-image/${Date.now()}`;
      const file = createNoteForm.file;
      const acceptedImageTypes = ["image/gif", "image/jpeg", "image/png"];
      if (acceptedImageTypes.includes(file.type)) {
        url = await filesService.uploadTaskPromise(path, file);
      }
    }
    noteAPI
      .changeNoteInfo({
        _id: data._id,
        name: createNoteForm.name,
        image: url,
      })
      .then((res) => {
        setState({ ...state, name: res.name, image: res.image });
        enqueueSnackbar("Cập nhật thông tin thành công", {
          variant: "success",
        });
        dispatch(noteAction.getNotesActive());
      })
      .catch((err) => {
        enqueueSnackbar("Có lỗi đã sảy ra :<", { variant: "error" });
        console.log({ err });
      });
  };

  const handleClick = () => {
    history.push("/note-space/" + data._id);
  };
  return (
    <div className="notes-view-box">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <div className="create-note-box">
            <p className="create-note-box__title">THAY ĐỔI THÔNG TIN</p>
            <div className="create-note-box__info">
              <div
                className="thumbnail-view"
                style={{
                  backgroundImage: `url(${createNoteForm.url})`,
                }}
              >
                <div
                  className="upload-file"
                  style={{ backgroundImage: "url(icons/camera.svg)" }}
                >
                  <input type="file" onChange={handleThumbnailChange} />
                </div>
              </div>
              <TextField
                className="name"
                label="Tên ghi chú"
                variant="outlined"
                size="small"
                fullWidth
                value={createNoteForm.name}
                onChange={handleTitleChange}
              />
            </div>
            <div className="create-note-box__action">
              <button className="cancel" onClick={handleClose}>
                Hủy
              </button>
              <button
                className="create"
                onClick={createNoteForm.name && handleSaveChange}
                disabled={!createNoteForm.name}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${state.image})` }}
        onClick={handleClick}
      ></div>
      <p>{state.name}</p>
      <div className="action">
        <IconButton size="small" className="pen" onClick={handleOpen}>
          <PenIcon />
        </IconButton>
        <Checkbox
          className={classNames({
            checkbox: true,
            checked: checked,
          })}
          checked={checked}
          sx={{
            color: "#FFFFFF",
            "&.Mui-checked": {
              color: "#FFFFFF",
            },
          }}
          onChange={handleCheckBoxChange}
        />
      </div>
    </div>
  );
}

export default NotesViewBox;
