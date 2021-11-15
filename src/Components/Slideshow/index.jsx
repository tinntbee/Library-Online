import React, { useEffect, useState } from "react";
import "./style.css";

Slideshow.propTypes = {};

function Slideshow(props) {
  const data = {
    listSlide: [
      {
        id: 1,
        path: "#",
        imageUrl:
          "https://cdn0.fahasa.com/media/flashmagazine/images/page_images/vu_tru_trong_vo_hat_de_tai_ban_2017/2020_05_27_17_21_23_1-390x510.JPG",
        backgroundColor: "red",
      },
      {
        id: 2,
        path: "#",
        imageUrl:
          "http://isach.info/images/story/cover/hai_con_meo_ngoi_ben_cua_so__nguyen_nhat_anh.jpg",
        backgroundColor: "blue",
      },
      {
        id: 3,
        path: "#",
        imageUrl:
          "https://product.hstatic.net/200000343865/product/hoang-tu-be_bia_70c1f285d8484f0292800a102ed7901f.jpg",
        backgroundColor: "green",
      },
      {
        id: 4,
        path: "#",
        imageUrl:
          "https://newshop.vn/public/uploads/products/21495/dao-tap-truyen-ngan.jpg",
        backgroundColor: "black",
      },
      {
        id: 5,
        path: "#",
        imageUrl:
          "https://firstnews.com.vn/public/uploads/products/dac-nhan-tam-biamem2019-76k-bia1.jpg",
        backgroundColor: "yellow",
      },
    ],
  };

  const delay = 400;
  const delayAutoSlide = 4000;

  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [rotate, setRotate] = useState(0);

  const slideItemClickHandle = (index) => {
    setRotate(index - 3);
  };
  
  function rotateArray(rotate){
    if (rotate > 0) {
      const newState = [...state];
      newState.unshift(newState.pop());
      console.log(state);
      setState(newState);
      setTimeout(() => {
        setRotate(rotate - 1);
      }, delay);
    }
    if (rotate < 0) {
      const newState = [...state];
      newState.push(newState.shift());
      console.log(state);
      setState(newState);
      setTimeout(() => {
        setRotate(rotate + 1);
      }, delay);
    }
  };

  useEffect(() => {
    if (rotate !== 0) {
      rotateArray(rotate);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rotate]);

  // auto slideshow
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setRotate(1), delayAutoSlide);

    return () => {
      resetTimeout();
    };
  }, [rotate]);

  return (
    <div className="Slideshow">
      {data.listSlide.map((item, index) => {
        return (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
            className={"SlideItem SlidePosition-" + state[index]}
            onClick={() => {
              slideItemClickHandle(state[index]);
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Slideshow;
