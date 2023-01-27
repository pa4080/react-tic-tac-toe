import React from "react";
import PlayersMap from "./PlayersMap";

function Square({ highlight, onClickBoard, player, i, x, y }) {
  return (
    <button
      id={`sq-${i}`}
      data-x={x}
      data-y={y}
      aria-label="Game board square"
      className={`square rounded-lg ${highlight ? "bg-orange-200" : ""}`}
      onClick={onClickBoard}
    >
      {PlayersMap(player)}
    </button>
  );
}

export default Square;
