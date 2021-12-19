import React, { useEffect, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import "./style.scss";
import { Worker, DocumentAskPasswordEvent } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import Controller from "./Controller";
import PDFViewer from "./PDFViewer";
import { Viewer } from "@react-pdf-viewer/core";
import { storage } from "../../../../service/firebase";

RenderPDF.propTypes = {};

function RenderPDF(props) {
  const zoomPluginInstance = zoomPlugin();
  const [url, setUrl] = useState("https://firebasestorage.googleapis.com/");
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
    const getUrlBook = async () => {
      const httpsReference = ref(
        storage,
        "https://firebasestorage.googleapis.com/v0/b/library-online-3ec9d.appspot.com/o/books%2Fpdf%2FTin%20Nguyen%20Trung%20-%20CV%20Fresher%20Front-end%20Software%20Engineer%20-%C4%91%C3%A3%20b%E1%BA%A3o%20v%E1%BB%87.pdf?alt=media&token=2ff3c3c9-0e56-40a2-879b-fc66021d0f17"
      );
      console.log({ httpsReference });
      getDownloadURL(httpsReference)
        .then((url) => {
          // `url` is the download URL for 'images/stars.jpg'

          // This can be downloaded directly:
          const xhr = new XMLHttpRequest();
          xhr.responseType = "blob";
          xhr.onload = (event) => {
            const blob = xhr.response;
          };
          xhr.open("GET", url);
          xhr.send();

          setUrl(url);
        })
        .catch((error) => {
          // Handle any errors
        });
    };
    getUrlBook();
  }, []);

  const handleAskPassword = (DocumentAskPasswordEvent) => {
    DocumentAskPasswordEvent.verifyPassword("1234");
  };
  return (
    <div className="ReadingSpace__book">
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
