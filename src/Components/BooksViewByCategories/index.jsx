import React from "react";
import QuoteIcon from "../../static/QuoteIcon";
import ListBookHorizontal from "../ListBookHorizontal";
import "./style.css";

BooksViewByCategories.propTypes = {};

function BooksViewByCategories(props) {
  const {data} = props;
  console.log(data);
  return (
    <div
      className="Books-view-by-categories"
      id={data.id}
      style={{ "--color": data.color }}
    >
      <div className="Books-view-by-categories-intro">
        <img alt="" src={data.thumbnail} />
        <p>{data.quote}</p>
        <QuoteIcon />
      </div>

      {data.listBooks.map((item,index)=>{
        return (
          <ListBookHorizontal books={item.books} key={index} title={item.title} />
        )
      })}
    </div>
  );
}

export default BooksViewByCategories;
