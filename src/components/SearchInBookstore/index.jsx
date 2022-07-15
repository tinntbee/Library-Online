import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import tagAPI from "../../api/tagAPI";
import SearchIcon from "../../static/SearchIcon";
import TagsIcon from "../../static/TagsIcon";
import queryString from "query-string";
import BookViewCard from "../BookViewCard";
import { useParams } from "react-router-dom";
import SearchBookViewCard from "../SearchBookViewCard";
import "./style.scss";
import { books } from "../../api/fake-api";
import LoadingAnimationIcon from "../Animation/LoadingAnimationIcon";

SearchInBookstore.propTypes = {};

function SearchInBookstore(props) {
  const [pending, setPending] = React.useState(false);
  const [state, setState] = useState({
    search: "",
    tagId: props.tag,
    sort: "new",
    filter: "all",
    page: 1,
    books: [],
    tagName: "",
    size: 10,
    limit: 0,
  });
  console.log(props.tag);
  const [tags, setTags] = useState([]);
  const searchRef = useRef();
  const [visible, setVisible] = useState(!!props.tag);
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
    tagAPI
      .getAll()
      .then((res) => {
        setTags(res);
      })
      .catch((e) => console.log({ e }));
  };
  const fetchDataSearch = async () => {
    setPending(true);
    searchRef.current.blur();
    const { search, tagId, filter, sort, page, size } = state;
    // console.log(state);
    const url = "/books/search";
    await axiosClient
      .post(url, { search, tagId, filter, sort, page, size })
      .then((res) => {
        // console.log({ res });
        setState({
          ...state,
          books: page === 1 ? res.books : [...state.books, ...res.books],
          page: res.page,
          size: res.size,
          limit: res.limit,
        });
        setPending(false);
      })
      .catch((e) => console.log({ e }));
  };
  const handleLoadMore = () => {
    setState({ ...state, page: state.page + 1 });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    fetchTags();
  }, []);

  useEffect(() => {
    fetchDataSearch();
  }, [state.page]);

  useEffect(() => {
    if (state.page !== 1) {
      setState({ ...state, page: 1 });
    } else {
      fetchDataSearch();
    }
  }, [state.search, state.tagId, state.filter, state.sort]);

  return (
    <div
      className={classNames({
        SearchInBookstore: true,
        active: visible,
      })}
    >
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
                    setVisible(true);
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
          <div className="books">
            {state.books &&
              state.books.map((item, index) => {
                return <SearchBookViewCard data={item} key={index} />;
              })}
          </div>
          {state.books.length < state.limit && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              Tải thêm
            </button>
          )}
        </div>
      </div>
      {pending && <LoadingAnimationIcon className="absolute" />}
    </div>
  );
}

export default SearchInBookstore;
