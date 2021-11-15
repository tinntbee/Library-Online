import React from "react";
import "./style.scss";
import { Worker } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import Controller from "./Controller";
import PDFViewer from "./PDFViewer";

RenderPDF.propTypes = {};

function RenderPDF(props) {
  const zoomPluginInstance = zoomPlugin();
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
  return (
    <div className="ReadingSpace__book">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <PDFViewer
          plugins={[
            zoomPluginInstance,
            pageNavigationPluginInstance,
            fullScreenPluginInstance,
          ]}
          fileUrl="/assets/docs/demo.pdf"
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
