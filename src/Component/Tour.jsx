import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, deleteHandler }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const showHandler = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <article>
      <img src={image} alt="" />
      <footer>
        <div className="header">
          <h3>{name}</h3>
          <h3>${price}</h3>
        </div>
        <p>
          {isShowMore ? info : `${info.substring(0, 200)}...`}
          <span onClick={showHandler}>
            {isShowMore ? "See less" : "See more"}
          </span>
        </p>
        <button onClick={() => deleteHandler(id)}>NOT INTERESTED</button>
      </footer>
    </article>
  );
};

export default Tour;
