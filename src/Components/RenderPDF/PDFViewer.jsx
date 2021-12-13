import { Viewer } from "@react-pdf-viewer/core";
import React from "react";

PDFViewer.propTypes = {};

function PDFViewer(props) {
  const {
    plugins,
    fileUrl
  } = props;
  return (
    <Viewer
      plugins={plugins}
      fileUrl={fileUrl}
    />
  );
}

export default PDFViewer;
