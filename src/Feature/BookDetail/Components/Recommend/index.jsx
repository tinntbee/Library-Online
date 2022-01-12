import React from "react";
import ListBookHorizontal from "../../../../components/ListBookHorizontal";
import "./style.scss";

Recommend.propTypes = {};

function Recommend(props) {
  const { data } = props;
  return data ? (
    <div className="Book-detail__container">
      <div className="Book-detail__header">
        <p className="Book-detail__title">RECOMMEND</p>
      </div>
      <div className="Book-detail__body">
        {data.map((item, index) => {
          return (
            <ListBookHorizontal
              key={index}
              title={"@" + item.name}
              color={"#F9B700"}
              data={item}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Recommend;
