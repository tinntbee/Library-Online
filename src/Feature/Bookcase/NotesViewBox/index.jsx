import { Fade, IconButton, Modal, TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import React, { useState } from "react";
import PenIcon from "../../../static/PenIcon";
import "./style.scss";

NotesViewBox.propTypes = {};

function NotesViewBox(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, handleCheckBoxOnChange, index, checked } = props;
  const handleCheckBoxChange = (e) => {
    handleCheckBoxOnChange({ index: index, isChecked: !checked });
  };
  const [createNoteForm, setCreateNoteForm] = useState({
    thumbnailFile: null,
    thumbnailUrl: data.image,
    title: "",
  });
  const handleTitleChange = (e) => {
    setCreateNoteForm({ ...createNoteForm, title: e.target.value });
  };
  const handleSaveChange = () => {};
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
                  backgroundImage: `url(${data.image})`,
                }}
              >
                <div
                  className="upload-file"
                  style={{ backgroundImage: "url(icons/camera.svg)" }}
                >
                  <input type="file" />
                </div>
              </div>
              <TextField
                className="name"
                label="Tên ghi chú"
                variant="outlined"
                size="small"
                fullWidth
                value={createNoteForm.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="create-note-box__action">
              <button className="cancel" onClick={handleClose}>
                Hủy
              </button>
              <button
                className="create"
                onClick={handleSaveChange}
                disabled={!createNoteForm.title}
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div
        className="thumbnail"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <p>{data.name}</p>
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
