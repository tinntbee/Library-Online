import React from "react";
import ListBookHorizontal from "../../../../Components/ListBookHorizontal";
import "./style.scss";

Recommend.propTypes = {};

function Recommend(props) {
  const data = [
    {
      title: "KHOA HOC",
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
      title: "VAT LY",
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
  ];
  return (
    <div className="Book-detail__container">
      <div className="Book-detail__header">
        <p className="Book-detail__title">RECOMMEND</p>
      </div>
      <div className="Book-detail__body">
        {data.map((item, index) => {
          return (
            <ListBookHorizontal
              key={index}
              books={item.books}
              title={"@" + item.title}
              color={'#F9B700'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recommend;
