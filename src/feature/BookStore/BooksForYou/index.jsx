import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useSelector } from "react-redux";
import BookViewCard from "../../../components/BookViewCard";
import BookViewCard_loading from "../../../components/BookViewCard/bookViewCard_loading";

BooksForYou.propTypes = {};

function BooksForYou(props) {
  const booksForYou = useSelector((state) => state.bookStore.booksForYou);

  return (
    <div className="Bookstore-content-container Book-for-you">
      <div className="Bookstore-content-container-header">
        <p>CÓ THỂ BẠN SẼ THÍCH</p>
      </div>
      <ScrollContainer className="Bookstore-content-container-body">
        {booksForYou.data &&
          booksForYou.data.map((item, index) => {
            return <BookViewCard key={index} data={item} />;
          })}
        {booksForYou.loading && (
          <>
            <BookViewCard_loading />
            <BookViewCard_loading />
            <BookViewCard_loading />
            <BookViewCard_loading />
            <BookViewCard_loading />
          </>
        )}
      </ScrollContainer>
      <div className="Bookstore-content-container-footer"></div>
    </div>
  );
}

export default BooksForYou;
