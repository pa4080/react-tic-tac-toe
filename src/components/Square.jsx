import React from "react";
import PlayersMap from "./PlayersMap";

function Square(props) {
  return (
    <button
      aria-label="Game board square"
      className={`square rounded-lg ${props.highlight ? "bg-orange-200" : ""}`}
      onMouseDown={props.onClickBoard}
    >
      {PlayersMap(props.player)}
    </button>
  );
}

export default Square;
