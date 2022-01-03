import React from "react";
import { useSelector } from "react-redux";
import ListBookHorizontal from "../../../components/ListBookHorizontal";
import "./style.scss";

OtherTags.propTypes = {};

function OtherTags(props) {
  const tags = useSelector((state) => state.bookStore.tags);
  return (
    <div className="other-tags">
      <p>CÁC THỂ LOẠI KHÁC</p>
      <div>
        {tags.data &&
          tags.data.map((item, index) => {
            if (!item.category) {
              return <ListBookHorizontal data={item} key={item._id} />;
            }
            return "";
          })}
      </div>
    </div>
  );
}

export default OtherTags;
