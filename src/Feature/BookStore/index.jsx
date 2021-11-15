import classNames from "classnames";
import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import BooksViewByCategories from "../../Components/BooksViewByCategories";
import BookViewCard from "../../Components/BookViewCard";
import SearchInBookstore from "../../Components/SearchInBookstore";
import Slideshow from "../../Components/Slideshow";
import life_style_image from "../../static/jpg/life-style.jpg";
import program_image from "../../static/jpg/program.jpg";
import science_space_image from "../../static/jpg/science-space.jpg";
import ToTopIcon from "../../static/ToTopIcon";
import "./style.css";

BookStore.propTypes = {};

function BookStore(props) {
  const data = [
    {
      id: "life-style",
      thumbnail: life_style_image,
      quote:
        '"Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me."',
      color: "#289860",
      listBooks: [
        {
          title: "Life style",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
        {
          title: "Program",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
      ],
    },
    {
      id: "program",
      thumbnail: program_image,
      quote:
        '"The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie',
      color: "#007BA1",
      listBooks: [
        {
          title: "Life style",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
        {
          title: "Program",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
      ],
    },
    {
      id: "science-space",
      thumbnail: science_space_image,
      quote:
        "Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.",
      color: "#161616",
      listBooks: [
        {
          title: "Life style",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
        {
          title: "Program",
          books: [
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
            {
              nameBook: "Có hai con mèo ngồi bên cửa sổ",
              path: "/book-detail",
              thumbnailUrl:
                "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
              price: 34,
              like: 94,
              read: 45,
            },
          ],
        },
      ],
    },
  ];
  
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
    console.log(scrollTopRef.current.scrollTop);
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
          <div className="Bookstore-content-container Book-for-you">
            <div className="Bookstore-content-container-header">
              <p>FOR YOU</p>
            </div>
            <ScrollContainer className="Bookstore-content-container-body">
              {data[0].listBooks[0].books.map((item, index) => {
                return <BookViewCard key={index} data={item} />;
              })}
            </ScrollContainer>
            <div className="Bookstore-content-container-footer"></div>
          </div>
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
          {data.map((item, index) => {
            return <BooksViewByCategories key={index} data={item} />;
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
