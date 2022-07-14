import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/js/plugins/fullscreen.min.js"
// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
// Require Editor JS files.
import "froala-editor/js/plugins.pkgd.min.js";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import bookAPI from "../../api/bookAPI";
import MyBooksList from "../../components/MyBooksList";
import RenderPDF from "./Components/RenderPDF";
import "./style.scss";

ReadingSpace.propTypes = {};

function ReadingSpace(props) {
  const [_id, set_id] = useState(
    queryString.parse(props.location.search).bookId
  );
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState();
  useEffect(() => {
    bookAPI.getBooksInBookcase().then((res) => {
      setBooks([...res]);
    });
  }, []);
  useEffect(() => {
    bookAPI
      .getBookInBookcase(_id)
      .then((res) => {
        setBook(res);
        console.log({ res });
      })
      .catch((err) => {
        console.log({ err });
        history.replace("/reading-space");
      });
  }, [_id]);
  history.listen(function (location) {
    let url = location.search;
    let { bookId } = queryString.parse(url);
    set_id(bookId);
  });

  const handlePageOnChange = () => {};
  return (
    <div className="ReadingSpace">
      {book ? (
        <RenderPDF
          link={book.book.link}
          page={book.currentPage}
          pass={book.book.key}
          _id={book.book._id}
          handlePageOnChange={handlePageOnChange}
        />
      ) : (
        <MyBooksList books={books} />
      )}
    </div>
  );
}

export default ReadingSpace;
