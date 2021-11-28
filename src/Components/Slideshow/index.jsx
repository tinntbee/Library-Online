import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../../redux/actions/bookActions";
import "./style.css";

Slideshow.propTypes = {};

function Slideshow(props) {
  const booksSlide = useSelector((state) => state.bookStore.booksSlide);
  const data = {
    listSlide: booksSlide
  };
  const delay = 400;
  const delayAutoSlide = 4000;

  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [rotate, setRotate] = useState(0);

  const slideItemClickHandle = (index) => {
    setRotate(index - 3);
  };

  function rotateArray(rotate) {
    if (rotate > 0) {
      const newState = [...state];
      newState.unshift(newState.pop());
      setState(newState);
      setTimeout(() => {
        setRotate(rotate - 1);
      }, delay);
    }
    if (rotate < 0) {
      const newState = [...state];
      newState.push(newState.shift());
      setState(newState);
      setTimeout(() => {
        setRotate(rotate + 1);
      }, delay);
    }
  }

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
      {data.listSlide.data && data.listSlide.data.map((item, index) => {
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
