import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import BooksViewByCategories from "../../components/BooksViewByCategories";
import BookViewCard from "../../components/BookViewCard";
import SearchInBookstore from "../../components/SearchInBookstore";
import Slideshow from "../../components/Slideshow";
import bookActions from "../../redux/actions/bookActions";
import tagAction from "../../redux/actions/tagAction";
import life_style_image from "../../static/jpg/life-style.jpg";
import program_image from "../../static/jpg/program.jpg";
import science_space_image from "../../static/jpg/science-space.jpg";
import ToTopIcon from "../../static/ToTopIcon";
import BooksForYou from "./BooksForYou";
import "./style.css";

BookStore.propTypes = {};

function BookStore(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookActions.getBooksSlide());
    dispatch(bookActions.getBooksForYou());
    dispatch(tagAction.getAllTagsByCategories());
  }, []);

  const tagsByCategories = useSelector(state=>state.bookStore.tagsByCategories.data);
  console.log(tagsByCategories);

  const data = useSelector(state=>state.bookStore.tagsByCategories.data);

  const [buttonScrollTop, setButtonScrollTop] = useState(false);
  const toggleVisible = () => {
    const scrolled = scrollTopRef.current.scrollTop;
    if (scrolled > 300) {
      setButtonScrollTop(true);
    } else if (scrolled <= 300) {
      setButtonScrollTop(false);
    }
  };

  const scrollTopRef = React.createRef();
  const onClickHandle = () => {
    scrollTopRef.current.scrollTop = 0;
  };

  return (
    <div className="Bookstore main-content">
      <div className="header">
        <p className="title">BOOK STORE</p>
        <p className="hoa">$34</p>
      </div>
      <div className="body">
        <SearchInBookstore />
        <div
          className="body-content"
          onScroll={() => toggleVisible()}
          ref={scrollTopRef}
        >
          <Slideshow />
          <BooksForYou />
          <div className="Hot-categories-container">
            <a href="#life-style">
              <img alt="" src={life_style_image} />
            </a>
            <a href="#program">
              <img alt="" src={program_image} />
            </a>
            <a href="#science-space">
              <img alt="" src={science_space_image} />
            </a>
          </div>
          {data && data.map((item, index) => {
            return <BooksViewByCategories key={item._id} data={item} />;
          })}
        </div>
        <div
          onClick={() => onClickHandle()}
          className={classNames({
            "go-top": true,
            active: buttonScrollTop,
          })}
        >
          <ToTopIcon />
        </div>
      </div>
    </div>
  );
}

export default BookStore;
