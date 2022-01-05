import React from "react";
import { useEffect } from "react";

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
  } = props;

  const translateService = async (text) => {
    const res = await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: "vi",
      }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(await res.json());
  };

  const handleTranslate = () => {
    const text = window.getSelection().toString();
    translateService(text);
  };

  return (
    <div className="ReadingSpace__book__control">
      <div className="left">
        <button className="translate" onClick={handleTranslate}></button>
        <EnterFullScreen>
          {(props) => (
            <button className="full-screen" onClick={props.onClick}></button>
          )}
        </EnterFullScreen>
      </div>

      <div className="center">
        <GoToFirstPage>
          {(props) => (
            <button
              className="go-to-first-page"
              onClick={props.onClick}
            ></button>
          )}
        </GoToFirstPage>

        <GoToPreviousPage>
          {(props) => (
            <button
              className="go-to-previous-page"
              disabled={props.isDisabled}
              onClick={props.onClick}
            ></button>
          )}
        </GoToPreviousPage>

        <CurrentPageLabel>
          {(props) => (
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
          {(props) => (
            <button
              className="go-to-next-page"
              disabled={props.isDisabled}
              onClick={props.onClick}
            ></button>
          )}
        </GoToNextPage>

        <GoToLastPage>
          {(props) => (
            <button
              className="go-to-last-page"
              onClick={props.onClick}
            ></button>
          )}
        </GoToLastPage>
      </div>

      <div className="right">
        <ZoomOut>
          {(props) => (
            <button className="zoom-out" onClick={props.onClick}></button>
          )}
        </ZoomOut>

        <CurrentScale>
          {(props) => (
            <p className="scale">
              <b>{`${Math.round(props.scale * 100)}%`}</b>
            </p>
          )}
        </CurrentScale>

        <ZoomIn>
          {(props) => (
            <button className="zoom-in" onClick={props.onClick}></button>
          )}
        </ZoomIn>
      </div>
    </div>
  );
}

export default Controller;
