import { Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import RenderPDF from "../../../../components/RenderPDF";
import "./style.scss";

BookViewIntro.propTypes = {};

function BookViewIntro(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState({
    linkIntro:
      "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fpdf%2FTin%20Nguyen%20Trung%20-%20CV%20Fresher%20Front-end%20Software%20Engineer%20-%C4%91%C3%A3%20b%E1%BA%A3o%20v%E1%BB%87.pdf?alt=media&token=2ff3c3c9-0e56-40a2-879b-fc66021d0f17",
  });
  return (
    <>
      <div
        className="Book-view-intro"
        style={{ backgroundImage: `url("../../../icons/fullscreen.svg")` }}
        onClick={handleOpen}
      ></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
      >
        <Fade in={open}>
          <div className="renderPDF-container">
            <RenderPDF link={data.linkIntro} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default BookViewIntro;
