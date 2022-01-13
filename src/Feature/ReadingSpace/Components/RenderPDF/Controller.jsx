import classNames from "classnames";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axiosClient from "../../../../api/axiosClient";

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

  const [translate, setTranslate] = useState({
    open: false,
    des: "",
    loading: "",
  });

  const [src, setSrc] = useState("");

  const translateService = async (text) => {
    setTranslate({ ...translate, open: true, loading: true });
    await fetch("https://libretranslate.de/translate", {
      method: "POST",
      body: JSON.stringify({
        q: text,
        source: "auto",
        target: "vi",
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((responseJson) => {
        console.log({ responseJson });
        setTranslate({
          ...translate,
          open: true,
          des: responseJson.translatedText,
          loading: false,
        });
      })
      .catch((err) => {
        setTranslate({
          ...translate,
          des: "[Lỗi] Không thể kết nối đến máy chủ :<",
          loading: false,
          open: true,
        });
      });
  };

  const handleOpenTranslateClick = () => {
    const text = window.getSelection().toString();
    if (text) {
      translateService(text);
      setSrc(text);
    } else {
      setTranslate({ ...translate, open: !translate.open });
    }
  };

  const handleSrcOnChange = (e) => {
    setSrc(e.target.value);
  };

  const handleTranslateClick = () => {
    if (src) {
      translateService(src);
    }
  };
  return (
    <div
      className={classNames({
        ReadingSpace__book__control: true,
        hide: !translate.open,
      })}
    >
      <div className="left">
        <div
          className={classNames({
            "translate-container": true,
            active: translate.open,
          })}
        >
          {translate.open && (
            <div className="translate-content">
              <div className="translate-content__top">
                <input
                  className="src"
                  type={"text"}
                  onChange={handleSrcOnChange}
                  value={src}
                />
                <button
                  disabled={src.length === 0 || translate.loading}
                  onClick={handleTranslateClick}
                >
                  Dịch
                </button>
              </div>
              <div className="translate-content__bottom">
                <p>{translate.des}</p>
              </div>
            </div>
          )}
          <button
            className="translate"
            onClick={handleOpenTranslateClick}
          ></button>
        </div>
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
