import classNames from "classnames";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useDispatch, useSelector } from "react-redux";
import SearchInBookstore from "../../components/SearchInBookstore";
import Slideshow from "../../components/Slideshow";
import bookActions from "../../redux/actions/bookActions";
import tagAction from "../../redux/actions/tagAction";
import life_style_image from "../../static/jpg/life-style.jpg";
import program_image from "../../static/jpg/program.jpg";
import science_space_image from "../../static/jpg/science-space.jpg";
import ToTopIcon from "../../static/ToTopIcon";
import AllCategories from "./AllCategories";
import BooksForYou from "./BooksForYou";
import OtherTags from "./OtherTags";
import "./style.scss";

BookStore.propTypes = {};

function BookStore(props) {
  const categories = useSelector(
    (state) => state.bookStore.tagsByCategories.data
  );
  console.log({ categories });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookActions.getBooksSlide());
    dispatch(bookActions.getBooksForYou());
    dispatch(tagAction.getAllTagsByCategories());
    dispatch(tagAction.getTags());
  }, []);
  const user = useSelector((state) => state.user.user);

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

  let url = props.location.search;
  let { tagId } = queryString.parse(url);

  return (
    <div className="Bookstore main-content">
      <div className="header">
        <p className="title">THƯ VIỆN</p>
        <p className="hoa">{user && "$" + user.hoa}</p>
      </div>
      <div className="body">
        <SearchInBookstore tag={tagId} />
        <div
          className="body-content"
          onScroll={() => toggleVisible()}
          ref={scrollTopRef}
        >
          <Slideshow />
          <BooksForYou />
          <div className="Hot-categories-container">
            <ScrollContainer className="categories-list-scroll">
              {categories &&
                categories.map((item, index) => {
                  return (
                    <a href={`#${item.name?.toLowerCase().replaceAll(" ", "_")}`}>
                      <img alt="" src={item.thumbnail} />
                    </a>
                  );
                })}
            </ScrollContainer>
          </div>
          <AllCategories />
          <OtherTags />
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
