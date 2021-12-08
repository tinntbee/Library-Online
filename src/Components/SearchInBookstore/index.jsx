import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "../../static/SearchIcon";
import TagsIcon from "../../static/TagsIcon";
import BookViewCard from "../BookViewCard";
import SearchBookViewCard from "../SearchBookViewCard";
import "./style.scss";

SearchInBookstore.propTypes = {};

function SearchInBookstore(props) {
  const [state, setState] = useState(false);
  const searchClickHandle = () => {
    setState(!state);
  };
  const tagsBoxRef = useRef();
  const [showTagsBox, setShowTagsBox] = useState(false);
  const books = [
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
    {
      _id: 1,
      name: "Có hai con mèo ngồi bên cửa sổ",
      image:
        "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
      price: 34,
      like: 94,
      dislike: 6,
      totalRead: 45,
    },
  ];
  const handleClickOutside = (e) => {
    if (tagsBoxRef.current && !tagsBoxRef.current.contains(e.target)) {
      setShowTagsBox(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      className={classNames({
        SearchInBookstore: true,
        active: state,
      })}
    >
      <Link to="#">
        <input className="search-box" type="text" placeholder="Tìm kiếm.." />
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
          <p className="tag">KHOAHOC</p>
          <p className="tag">VATLY</p>
          <p className="tag">LAPTRINH</p>
          <p className="tag">NGHETHUAT</p>
          <p className="tag">KIENTRUC</p>
          <p className="tag">KHOAHOC</p>
          <p className="tag">VATLY</p>
          <p className="tag">LAPTRINH</p>
          <p className="tag">NGHETHUAT</p>
          <p className="tag">KIENTRUC</p>
        </div>
      </div>
      <div className="result-container">
        <div className="result-container__header">
          <p>
            Kết quả tìm kiếm <b>#KHOAHOC</b>
          </p>
          <div className="search-control">
            <select className="filter-by">
              <option value="1">Tất cả</option>
              <option value="2">Miễn phí</option>
              <option value="3">Chưa sở hữu</option>
              <option value="4">Đã thích</option>
            </select>
            <select className="sort-by">
              <option value="1">Mới nhất</option>
              <option value="2">Cũ nhất</option>
              <option value="3">Đọc nhiều nhất</option>
              <option value="4">Xịn nhất ^^</option>
              <option value="5">Giá tốt nhất</option>
            </select>
          </div>
        </div>
        <div className="result-container__body">
          {books &&
            books.map((item, index) => {
              return <SearchBookViewCard data={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default SearchInBookstore;
