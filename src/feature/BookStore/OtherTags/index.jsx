import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tagAPI from "../../../api/tagAPI";
import ListBookHorizontal from "../../../components/ListBookHorizontal";
import "./style.scss";

OtherTags.propTypes = {};

function OtherTags(props) {
  const [tags, setTags] = useState([]);
  const fetchOtherTags = async () => {
    tagAPI
      .getOtherTag()
      .then((res) => {
        console.log({ res });
        setTags(res);
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  useEffect(() => {
    fetchOtherTags();
  }, []);
  return (
    <div className="other-tags">
      <p>CÁC THỂ LOẠI KHÁC</p>
      <div>
        {tags &&
          tags.map((item, index) => {
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
