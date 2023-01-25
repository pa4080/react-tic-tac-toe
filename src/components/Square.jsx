import React from "react";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

function Square(props) {
  return (
    <button
      aria-label="Game board square"
      className={`square rounded-lg ${props.highlight ? "bg-orange-200" : ""}`}
      onMouseDown={props.onClickBoard}
    >
      {props.value === "X" && <PlayerStar />}
      {props.value === "O" && <PlayerHeart />}
    </button>
  );
}

export default Square;
