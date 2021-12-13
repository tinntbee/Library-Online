import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import SearchIcon from "../../static/SearchIcon";
import TagsIcon from "../../static/TagsIcon";
import BookViewCard from "../BookViewCard";
import SearchBookViewCard from "../SearchBookViewCard";
import "./style.scss";

SearchInBookstore.propTypes = {};

function SearchInBookstore(props) {
  const [state, setState] = useState({
    books: [],
    search: "",
    tagId: "",
    tagName: "",
    filter: "all",
    sort: "new",
    page: 1,
    size: 10,
    limit: 0,
  });
  const [tags, setTags] = useState([]);
  const searchRef = useRef();
  const [visible, setVisible] = useState(false);
  const searchClickHandle = () => {
    setVisible(!visible);
  };
  const tagsBoxRef = useRef();
  const [showTagsBox, setShowTagsBox] = useState(false);
  const handleClickOutside = (e) => {
    if (tagsBoxRef.current && !tagsBoxRef.current.contains(e.target)) {
      setShowTagsBox(false);
    }
  };
  const fetchTags = async () => {
    const url = "/tags";
    await axiosClient
      .get(url)
      .then((res) => {
        setTags(res);
      })
      .catch((e) => console.log({ e }));
  };
  const fetchDataSearch = async () => {
    searchRef.current.blur();
    const { search, tagId, filter, sort, page, size } = state;
    const url = "/books/search";
    await axiosClient
      .post(url, { search, tagId, filter, sort, page, size })
      .then((res) => {
        console.log({ res });
        setState({
          ...state,
          books: res.books,
          page: res.page,
          size: res.size,
          limit: res.limit,
        });
      })
      .catch((e) => console.log({ e }));
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    fetchTags();
  }, []);
  useEffect(() => {
    fetchDataSearch();
  }, [state.search, state.tagId, state.filter, state.sort, state.page]);
  return (
    <div
      className={classNames({
        SearchInBookstore: true,
        active: visible,
      })}
    >
      <Link to="#">
        <input
          ref={searchRef}
          className="search-box"
          type="text"
          placeholder="Tìm kiếm.."
          onKeyPress={(e) =>
            e.key === "Enter" && setState({ ...state, search: e.target.value })
          }
          onClick={() => searchRef.current.select()}
        />
        <SearchIcon onClick={() => searchClickHandle()} />
      </Link>
      <div
        ref={tagsBoxRef}
        className={classNames({
          "tags-box": true,
          active: showTagsBox,
        })}
      >
        <TagsIcon onClick={() => setShowTagsBox(!showTagsBox)} />
        <p className="tags-title">
          <b>Tags</b>
        </p>
        <div className="tags-list">
          <p
            className="tag"
            onClick={() => {
              setState({ ...state, tagId: "", tagName: "" });
              setShowTagsBox(false);
            }}
          >
            Tất cả
          </p>
          {tags &&
            tags.map((item, index) => {
              return (
                <p
                  key={index}
                  className="tag"
                  onClick={() => {
                    setState({ ...state, tagId: item._id, tagName: item.name });
                    setShowTagsBox(false);
                  }}
                >
                  {item.name}
                </p>
              );
            })}
        </div>
      </div>
      <div className="result-container">
        <div className="result-container__header">
          <p>
            Kết quả tìm kiếm <b>{state.tagName && "#" + state.tagName}</b>
          </p>
          <div className="search-control">
            <select
              className="filter-by"
              onChange={(e) => {
                setState({ ...state, filter: e.target.value });
              }}
              value={state.filter}
            >
              <option value="all">Tất cả</option>
              <option value="free">Miễn phí</option>
              <option value="not-have">Chưa sở hữu</option>
              <option value="liked">Đã thích</option>
            </select>
            <select
              className="sort-by"
              onChange={(e) => {
                setState({ ...state, sort: e.target.value });
              }}
              value={state.sort}
            >
              <option value="new">Mới nhất</option>
              <option value="old">Cũ nhất</option>
              <option value="most-read">Đọc nhiều nhất</option>
              <option value="expensive">Xịn nhất ^^</option>
              <option value="cheap">Giá tốt nhất</option>
            </select>
          </div>
        </div>
        <div className="result-container__body">
          {state.books &&
            state.books.map((item, index) => {
              return <SearchBookViewCard data={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchInBookstore;
