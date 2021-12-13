import { Viewer, Worker } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import React, { useEffect, useState } from "react";
import Controller from "./Controller";
import "./style.scss";

RenderPDF.propTypes = {};

function RenderPDF(props) {
  const { link } = props;
  const zoomPluginInstance = zoomPlugin();
  const [url, setUrl] = useState(link);
  const pageNavigationPluginInstance = pageNavigationPlugin();
  const { CurrentScale, ZoomIn, ZoomOut } = zoomPluginInstance;
  const {
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
  } = pageNavigationPluginInstance;
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  useEffect(() => {
  }, []);

  const handleAskPassword = (DocumentAskPasswordEvent) => {
    DocumentAskPasswordEvent.verifyPassword("1234");
  };
  return (
    <div className="renderPDF">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <Viewer
          onDocumentAskPassword={handleAskPassword}
          plugins={[
            zoomPluginInstance,
            pageNavigationPluginInstance,
            fullScreenPluginInstance,
          ]}
          fileUrl={url}
        />
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
      />
    </div>
  );
}

export default RenderPDF;
