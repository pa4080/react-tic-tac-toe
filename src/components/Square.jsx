import React from "react";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

function Square(props) {
  return (
    <button className="square" onClick={props.onClickBoard}>
      {props.value === "X" && <PlayerStar />}
      {props.value === "O" && <PlayerHeart />}
    </button>
  );
}

export default Square;
