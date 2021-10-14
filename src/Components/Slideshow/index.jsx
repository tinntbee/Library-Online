import React, { useEffect, useState } from "react";
import "./style.css";

Slideshow.propTypes = {};

function Slideshow(props) {
  const data = {
    listSlide: [
      {
        id: 1,
        path: "#",
        imageUrl: "bla",
        backgroundColor: "red",
      },
      {
        id: 2,
        path: "#",
        imageUrl: "bla",
        backgroundColor: "blue",
      },
      {
        id: 3,
        path: "#",
        imageUrl: "bla",
        backgroundColor: "green",
      },
      {
        id: 4,
        path: "#",
        imageUrl: "bla",
        backgroundColor: "black",
      },
      {
        id: 5,
        path: "#",
        imageUrl: "bla",
        backgroundColor: "yellow",
      },
    ],
  };

  const [state, setState] = useState([1, 2, 3, 4, 5]);
  const [rotate, setRotate] = useState(0);

  const slideItemClickHandle = (index) => {
    setRotate(index - 3);
  };
  const rotateArray = (rotate) => {
    if (rotate > 0) {
      const newState = [...state];
      newState.unshift(newState.pop());
      console.log(state);
      setState(newState);
      setTimeout(() => {
        setRotate(rotate-1);;
      }, 500);
    }
    if (rotate < 0) {
      const newState = [...state];
      newState.push(newState.shift());
      console.log(state);
      setState(newState);
      setTimeout(() => {
        setRotate(rotate+1);;
      }, 500);
    }
  };

  useEffect(() => {
    if (rotate !== 0) {
        rotateArray(rotate);
    }
  }, [rotate]);

  return (
    <div className="Slideshow">
      {data.listSlide.map((item, index) => {
        return (
          <div
            style={{ background: item.backgroundColor }}
            className={"SlideItem SlidePosition-" + state[index]}
            onClick={() => {
              slideItemClickHandle(state[index]);
            }}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
}

export default Slideshow;
