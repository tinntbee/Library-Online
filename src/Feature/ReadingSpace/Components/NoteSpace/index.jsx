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

NoteSpace.propTypes = {
    
};

function NoteSpace(props) {
    const handleModelChange = (model) => {
        setState({
          model: model,
        });
        console.log(state);
      };
    
      const [state, setState] = useState({ model: "Example text" });
    
      const config = {
        attribution: false,
        placeholder: "Start typing...",
        toolbarButtons: {
          moreText: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "backgroundColor",
              "inlineClass",
              "inlineStyle",
              "clearFormatting",
            ],
          },
          moreParagraph: {
            buttons: [
              "alignLeft",
              "alignCenter",
              "formatOLSimple",
              "alignRight",
              "alignJustify",
              "formatOL",
              "formatUL",
              "paragraphFormat",
              "paragraphStyle",
              "lineHeight",
              "outdent",
              "indent",
              "quote",
            ],
          },
          moreRich: {
            buttons: [
              "insertTable",
              "emoticons",
              "insertLink",
              "insertImage",
              "insertVideo",
              "fontAwesome",
              "specialCharacters",
              "embedly",
              "insertFile",
              "insertHR",
            ],
            buttonsVisible: 2,
          },
          moreMisc: {
            buttons: [
              "undo",
              "redo",
              "fullscreen",
              "print",
              "spellChecker",
              "selectAll",
              "html",
              "help",
            ],
            align: "right",
            buttonsVisible: 0,
          },
        },
        pluginsEnabled: [
          "table",
          "spell",
          "quote",
          "save",
          "quickInsert",
          "paragraphFormat",
          "paragraphStyle",
          "help",
          "draggable",
          "align",
          "link",
          "lists",
          "file",
          "image",
          "emoticons",
          "url",
          "embedly",
          "colors",
          "entities",
          "inlineClass",
          "inlineStyle",
          // 'codeBeautif '
          // 'spellChecker',
          "imageTUI",
        ],
      };
    return (
        <div className="ReadingSpace__note">
        <FroalaEditor
          className="ReadingSpace__editor"
          tag="textarea"
          config={config}
          model={state.model}
          onModelChange={handleModelChange}
        />
      </div>
    );
}

export default NoteSpace;