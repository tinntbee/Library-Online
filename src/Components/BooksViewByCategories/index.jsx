import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import bookActions from "../../redux/actions/bookActions";
import QuoteIcon from "../../static/QuoteIcon";
import ListBookHorizontal from "../ListBookHorizontal";
import "./style.css";

BooksViewByCategories.propTypes = {};

function BooksViewByCategories(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const books = useSelector((state) =>
    state.bookStore.booksByTags.data.find((item) => item._id === 1)
  );
  // useEffect(() => {
  //   if (!books) {
      
  //   dispatch(bookActions.getBooksByTags(data._id));
  //   }
  // }, []);
  return (
    <>
      {data && (
        <div
          className="Books-view-by-categories"
          id={data._id}
          style={{ "--color": data.color }}
        >
          <div className="Books-view-by-categories-intro">
            <img alt="" src={data.thumbnail} />
            <p>{data.quote}</p>
            <QuoteIcon />
          </div>

          {data.tags.map((item, index) => {
            return (
              <ListBookHorizontal
                key={index}
                data={item}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default BooksViewByCategories;
