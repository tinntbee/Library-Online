import React from "react";
import Checkbox from "@mui/material/Checkbox";
import classNames from "classnames";
import PropTypes from "prop-types";
import "./style.scss";

NotesViewBox.propTypes = {};

function NotesViewBox(props) {
  const { data, handleCheckBoxOnChange, index } = props;
  const handleCheckBoxChange = (e) => {
    handleCheckBoxOnChange({ index: index, checked: !data.checked });
  };
  return (
    <div className="notes-view-box">
      <div className="thumbnail" style={{backgroundImage: `url(${data.image})`}}></div>
      <p>{data.name}</p>
      <div className="action">
        <Checkbox
          className={classNames({
            checkbox: true,
            checked: data.checked,
          })}
          checked={data.checked}
          sx={{
            color: "#FFFFFF",
            "&.Mui-checked": {
              color: "#FFFFFF",
            },
          }}
          onChange={handleCheckBoxChange}
        />
      </div>
    </div>
  );
}

export default NotesViewBox;
