import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/js/plugins/fullscreen.min.js"
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
// Require Editor JS files.
import "froala-editor/js/plugins.pkgd.min.js";
import React from "react";
import NoteSpace from "./Components/NoteSpace";
import PomodoroMode from "./Components/Pomodoro";
import RenderPDF from "./Components/RenderPDF";
import "./style.scss";


ReadingSpace.propTypes = {};

function ReadingSpace(props) {

  return (
    <div className="ReadingSpace">
      <NoteSpace/>
      <RenderPDF/>
      <PomodoroMode/>
    </div>
  );
}

export default ReadingSpace;
