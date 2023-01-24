import React from "react";
import PlayerDraw from "./PlayerDraw";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

export default function Status({ winner, xIsNext }) {
  let message = winner
    ? winner === "Draw"
      ? "Draw: "
      : "Winner is:"
    : "Next player is:";

  return (
    <div className="inline-flex items-center font-sans text-xl mb-2 mt-4">
      {message}&nbsp;
      {!winner && ((xIsNext && <PlayerStar />) || <PlayerHeart />)}
      {(winner === "X" && <PlayerStar />) ||
        (winner === "O" && <PlayerHeart />) ||
        (winner === "Draw" && <PlayerDraw />)}
    </div>
  );
}
