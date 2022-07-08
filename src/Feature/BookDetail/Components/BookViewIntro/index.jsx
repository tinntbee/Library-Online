import { Fade, Modal } from "@mui/material";
import React, { useState } from "react";
import RenderPDF from "../../../../components/RenderPDF";
import "./style.scss";

BookViewIntro.propTypes = {};

function BookViewIntro(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = props;
  return (
    <>
      <div
        className="Book-view-intro tooltip"
        style={{ backgroundImage: `url("../../../icons/fullscreen.svg")` }}
        onClick={handleOpen}
      >
        <span class="tooltip-text right">Xem Intro</span>
      </div>
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
