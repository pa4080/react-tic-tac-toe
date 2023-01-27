import React from "react";
import PlayersMap from "./PlayersMap";

function Square({ highlight, onClickBoard, player }) {
  return (
    <button
      aria-label="Game board square"
      className={`square rounded-lg ${highlight ? "bg-orange-200" : ""}`}
      onMouseDown={onClickBoard}
    >
      {PlayersMap(player)}
    </button>
  );
}

export default Square;
