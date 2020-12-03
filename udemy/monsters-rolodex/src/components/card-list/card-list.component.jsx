import React from "react";
import "./card.styles.css";

export const CardList = (props) => {
  // console.log(props);
  return <div className="card-list">{props.children}</div>;
};
