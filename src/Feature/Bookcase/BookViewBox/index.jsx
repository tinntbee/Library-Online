import React, { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "@mui/material/Checkbox";
import { useHistory } from "react-router-dom";
import "./style.scss";
import {
  CircularProgress,
  Fade,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import ReadIcon from "../../../static/ReadIcon";
import classNames from "classnames";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { filesService } from "../../../service/firebase/filesService";
import { useSnackbar } from "notistack";
import noteAPI from "../../../api/noteAPI";

BookViewBox.propTypes = {};

function BookViewBox(props) {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { data, handleCheckBoxOnChange, index, checked } = props;
  const [open, setOpen] = React.useState(false);
  const [createNoteForm, setCreateNoteForm] = useState({
    file: null,
    url: data.book.image,
    title: "",
  });
  const user = useSelector((state) => state.user.user);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCreateNoteForm({
      file: null,
      url: data.book.image,
      title: "",
    });
  };

  const handleCheckBoxChange = (e) => {
    handleCheckBoxOnChange({ index: index, isChecked: !checked });
  };

  const handleThumbnailChange = (e) => {
    var file = e.target.files[0];
    var url = URL.createObjectURL(file);
    setCreateNoteForm({ ...createNoteForm, url: url, file: file });
    return () => URL.revokeObjectURL(url);
  };
  const handleTitleCreateNoteChange = (e) => {
    setCreateNoteForm({ ...createNoteForm, title: e.target.value });
  };
  const handleCreateNewNote = async () => {
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
      .createNote({
        name: createNoteForm.title,
        book: data.book._id,
        image: url,
      })
      .then((res) => {
        setOpen(false);
        enqueueSnackbar("Tạo Note mới thành công", {
          variant: "success",
        });
        history.push("/note-space/" + res._id);
      })
      .catch((e) => {
        setOpen(false);
        console.log({ e });
        enqueueSnackbar("Có lỗi đã sảy ra :<", { variant: "error" });
      });
  };
  return (
    <div
      className="book-view-box"
      style={{ backgroundImage: `url(${data.book.image})` }}
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
                onClick={createNoteForm.title && handleCreateNewNote}
                disabled={!createNoteForm.title}
              >
                Tạo
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      <button
        className="read-btn"
        onClick={() => {
          history.push("/reading-space?bookId=" + data.book._id);
        }}
      >
        Đọc ngay
      </button>
      <div className="action">
        <IconButton size="small" className="read" onClick={handleOpen}>
          <ReadIcon />
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
      <div
        className="detail"
        onClick={() => history.push(`/book-detail/${data.book._id}`)}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            sx={{ color: "#fff" }}
            variant="determinate"
            value={data.progress}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" component="div" color="#FFF">
              {`${data.progress}%`}
            </Typography>
          </Box>
        </Box>
        <p className="name">{data.book.name}</p>
      </div>
    </div>
  );
}

export default BookViewBox;
