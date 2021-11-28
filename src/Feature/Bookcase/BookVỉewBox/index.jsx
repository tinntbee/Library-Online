import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import "./style.scss";
import { Fade, IconButton, Modal, TextField } from "@mui/material";
import ReadIcon from "../../../static/ReadIcon";
import classNames from "classnames";

BookViewBox.propTypes = {};

function BookViewBox(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, handleCheckBoxOnChange, index } = props;
  const handleCheckBoxChange = (e) => {
    handleCheckBoxOnChange({ index: index, checked: !data.checked });
  };
  const [createNoteForm, setCreateNoteForm] = useState({
    thumbnailFile: null,
    thumbnailUrl: data.image,
    title: "",
  });
  const handleTitleCreateNoteChange = (e) => {
    setCreateNoteForm({ ...createNoteForm, title: e.target.value });
  };
  const handleCreateNewNote = () => {};
  return (
    <div
      className="book-view-box"
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <div className="create-note-box">
            <p className="create-note-box__title">Create new note</p>
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
                onChange={handleTitleCreateNoteChange}
              />
            </div>
            <div className="create-note-box__action">
              <button className="cancel" onClick={handleClose}>
                Hủy
              </button>
              <button
                className="create"
                onClick={handleCreateNewNote}
                disabled={!createNoteForm.title}
              >
                Tạo
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <div className="action">
        <IconButton size="small" className="read" onClick={handleOpen}>
          <ReadIcon />
        </IconButton>
        <Checkbox
          className={classNames({
            checkbox: true,
            checked: data.checked,
          })}
          checked={data.checked}
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

export default BookViewBox;
