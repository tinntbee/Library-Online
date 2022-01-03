import React, { useState } from "react";
import PropTypes from "prop-types";
import NoteEditor from "./Components/NoteEditor";
import PomodoroMode from "./Components/Pomodoro";
import RenderPDF from "./Components/RenderPDF";
import { classNames } from "@react-pdf-viewer/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./style.scss";
import noteAPI from "../../api/noteAPI";
import noteAction from "../../redux/actions/noteAction";

NoteTabPanel.propTypes = {};

function NoteTabPanel(props) {
  const { _id, visible } = props;
  const dispatch = useDispatch();
  const noteData = useSelector(
    (state) => state.notes.notes.filter((item) => item._id === _id)?.[0]
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [note, setNote] = useState(noteData);
  useEffect(() => {
    if (visible && !note) {
      setNote(noteData);
    }
  }, [visible]);

  //NOTE: Handle
  const handleContentOnChange = (note) => {
    noteAPI
      .putNoteContent(note)
      .then((res) => {
        dispatch(noteAction.putNoteContent(res));
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const handlePageOnChange = (note) => {
    setCurrentPage(note.page);
  };
  useEffect(() => {
    dispatch(noteAction.changePageCurrent({ _id: _id, page: currentPage }));
  }, [currentPage]);
  return (
    <>
      {visible && (
        <div
          className={classNames({
            "note-tab-panel": true,
            hidden: !visible,
          })}
        >
          {note && (
            <>
              <NoteEditor
                content={note?.content}
                _id={_id}
                handleContentOnChange={handleContentOnChange}
              />
              <RenderPDF
                link={note?.book.link}
                page={note?.page}
                pass={note?.book.key}
                _id={_id}
                handlePageOnChange={handlePageOnChange}
              />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default NoteTabPanel;
