import React from "react";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

function Square(props) {
  return (
    <button
      className={`square rounded-lg ${props.highlight ? "bg-orange-200" : ""}`}
      onClick={props.onClickBoard}
    >
      {props.value === "X" && <PlayerStar />}
      {props.value === "O" && <PlayerHeart />}
    </button>
  );
}

export default Square;
