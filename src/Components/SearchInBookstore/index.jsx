import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../static/SearchIcon";
import TagsIcon from "../../static/TagsIcon";
import "./style.css";

SearchInBookstore.propTypes = {};

function SearchInBookstore(props) {
  const [state, setState] = useState(false);
  const searchClickHandle = () => {
    setState(!state);
  };
  return (
    <div
      className={classNames({
        SearchInBookstore: true,
        active: state,
      })}
    >
      <Link to="#" onClick={() => searchClickHandle()}>
        <SearchIcon />
      </Link>
      <Link to="#">
        <TagsIcon />
      </Link>
    </div>
  );
}

export default SearchInBookstore;
