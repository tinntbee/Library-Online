import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";

// Require Editor JS files.
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/froala_editor.pkgd.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "./style.scss";
import { useEffect } from "react";
import noteAPI from "../../../../api/noteAPI";
import { filesService } from "../../../../service/firebase/filesService";

NoteEditor.propTypes = {};

function NoteEditor(props) {
  const { content, _id, handleContentOnChange } = props;
  const handleModelChange = (model) => {
    setState({
      model: model,
    });
    handleContentOnChange({ _id: _id, content: model });
  };

  const [state, setState] = useState({ model: content });

  const config = {
    events: {
      "image.beforeUpload": async function (files) {
        var editor = this;
        const path = "/Notes/Images/" + Date.now();
        const file = files[0];
        const result = await filesService.uploadTaskPromise(path, file);
        editor.image.insert(result, null, null, editor.image.get());

        editor.popups.hideAll();
        // Stop default upload chain.
        return false;
      },
    },
  };

  useEffect(() => {
    setState({ model: content });
  }, [content]);
  return (
    <div className="ReadingSpace__note">
      <FroalaEditor
        className="ReadingSpace__editor"
        tag="textarea"
        model={state.model}
        config={config}
        onModelChange={handleModelChange}
      />
    </div>
  );
}

export default NoteEditor;
