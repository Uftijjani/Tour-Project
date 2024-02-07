import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, deleteHandler }) => {
  return (
    <section>
      <h2 className="logo" style={{ letterSpacing: "-2px" }}>
        Our Tours
      </h2>
      <div className="container">
        {tours.map((tours) => {
          return (
            <Tour key={tours.id} {...tours} deleteHandler={deleteHandler} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
