import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/js/plugins/fullscreen.min.js"
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
// Require Editor JS files.
import "froala-editor/js/plugins.pkgd.min.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import noteAPI from "../../api/noteAPI";
import noteAction from "../../redux/actions/noteAction";
import NoteEditor from "./Components/NoteEditor";
import PomodoroMode from "./Components/Pomodoro";
import RenderPDF from "./Components/RenderPDF";
import NoteTabPanel from "./NoteTabPanel";
import "./style.scss";

NoteSpace.propTypes = {};

function NoteSpace(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const notes = useSelector((state) => state.notes.notes);
  useEffect(() => {
    if (notes.filter((item) => item._id === id).length === 0) {
      noteAPI
        .getNoteDetail(id)
        .then((res) => {
          console.log({ res });
          dispatch(noteAction.putNoteContent(res));
        })
        .catch((err) => {
          history.replace("/bookcase");
        });
    }
  }, []);
  return (
    <div className="NoteSpace">
      {notes.map((item, index) => {
        return item._id === id ? (
          <NoteTabPanel visible={true} _id={item._id} />
        ) : (
          <></>
        );
      })}
      <PomodoroMode />
    </div>
  );
}

export default NoteSpace;
