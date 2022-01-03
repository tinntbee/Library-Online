import { Viewer, Worker } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { storage } from "../../../../service/firebase";
import Controller from "./Controller";
import "./style.scss";

RenderPDF.propTypes = {};

function RenderPDF(props) {
  const { link, page, pass, _id, handlePageOnChange } = props;
  const [initialPage, setInitialPage] = useState();
  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  const {
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
    CurrentPageInput,
  } = pageNavigationPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  const handleAskPassword = (DocumentAskPasswordEvent) => {
    DocumentAskPasswordEvent.verifyPassword(pass);
  };

  useEffect(() => {
    setInitialPage(page);
    if (initialPage) {
      CurrentPageInput.value = initialPage;
    }
  }, [page]);

  //NOTE: handle
  const handleOnPageChange = (e) => {
    handlePageOnChange({ _id: _id, page: e.currentPage });
  };
  return (
    <div className="ReadingSpace__book">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        {link && (
          <Viewer
            initialPage={initialPage}
            onDocumentAskPassword={handleAskPassword}
            plugins={[
              zoomPluginInstance,
              pageNavigationPluginInstance,
              fullScreenPluginInstance,
            ]}
            fileUrl={link}
            onPageChange={handleOnPageChange}
          />
        )}
      </Worker>
      <Controller
        CurrentScale={CurrentScale}
        ZoomIn={ZoomIn}
        ZoomOut={ZoomOut}
        GoToFirstPage={GoToFirstPage}
        GoToLastPage={GoToLastPage}
        GoToNextPage={GoToNextPage}
        GoToPreviousPage={GoToPreviousPage}
        CurrentPageLabel={CurrentPageLabel}
        EnterFullScreen={EnterFullScreen}
        CurrentPageInput={CurrentPageInput}
      />
    </div>
  );
}

export default RenderPDF;
