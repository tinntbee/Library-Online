import React from "react";
import {
  RenderCurrentScaleProps,
  RenderZoomInProps,
  RenderZoomOutProps,
} from "@react-pdf-viewer/zoom";
import {
  RenderCurrentPageLabelProps,
  RenderCurrentPageInputProps,
  RenderGoToPageProps,
} from "@react-pdf-viewer/page-navigation";
import {
  RenderEnterFullScreenProps,
} from "@react-pdf-viewer/full-screen";

Controller.propTypes = {};

function Controller(props) {
  const {
    CurrentScale,
    ZoomIn,
    ZoomOut,
    GoToFirstPage,
    GoToLastPage,
    GoToNextPage,
    GoToPreviousPage,
    CurrentPageLabel,
    EnterFullScreen,
    CurrentPageInput
  } = props;
  return (
    <div className="ReadingSpace__book__control">
      <div className="left">
        <button className="translate"></button>
        <EnterFullScreen>
          {(props = RenderEnterFullScreenProps) => (
            <button className="full-screen" onClick={props.onClick}></button>
          )}
        </EnterFullScreen>
      </div>

      <div className="center">
        <GoToFirstPage>
          {(props = RenderGoToPageProps) => (
            <button
              className="go-to-first-page"
              onClick={props.onClick}
            ></button>
          )}
        </GoToFirstPage>

        <GoToPreviousPage>
          {(props = RenderGoToPageProps) => (
            <button
              className="go-to-previous-page"
              disabled={props.isDisabled}
              onClick={props.onClick}
            ></button>
          )}
        </GoToPreviousPage>

        <CurrentPageLabel>
          {(props = RenderCurrentPageLabelProps) => (
            <>
              <p>{"Page "}</p>
              <p className="current-page">
                <b>{` ${props.currentPage + 1} `}</b>
              </p>
              <p>
                {" of "}
                <b>{props.numberOfPages}</b>{" "}
              </p>
            </>
          )}
        </CurrentPageLabel>
        
        <GoToNextPage>
          {(props = RenderGoToPageProps) => (
            <button
              className="go-to-next-page"
              disabled={props.isDisabled}
              onClick={props.onClick}
            ></button>
          )}
        </GoToNextPage>

        <GoToLastPage>
          {(props = RenderGoToPageProps) => (
            <button
              className="go-to-last-page"
              onClick={props.onClick}
            ></button>
          )}
        </GoToLastPage>
      </div>

      <div className="right">
        <ZoomOut>
          {(props = RenderZoomOutProps) => (
            <button className="zoom-out" onClick={props.onClick}></button>
          )}
        </ZoomOut>

        <CurrentScale>
          {(props = RenderCurrentScaleProps) => (
            <p className="scale">
              <b>{`${Math.round(props.scale * 100)}%`}</b>
            </p>
          )}
        </CurrentScale>

        <ZoomIn>
          {(props = RenderZoomInProps) => (
            <button className="zoom-in" onClick={props.onClick}></button>
          )}
        </ZoomIn>
      </div>
    </div>
  );
}

export default Controller;
