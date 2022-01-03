import React from "react";
import LazyLoad from "react-lazyload";
import { useSelector } from "react-redux";
import BooksViewByCategories from "../../../components/BooksViewByCategories";
import "./style.scss";

AllCategories.propTypes = {};

function AllCategories(props) {
  const data = useSelector((state) => state.bookStore.tagsByCategories.data);
  return (
    <div className="all-categories">
      {data && <p>DANH MỤC SÁCH</p>}
      {data &&
        data.map((item, index) => {
          return <BooksViewByCategories key={item._id} data={item} />;
        })}
    </div>
  );
}

export default AllCategories;
