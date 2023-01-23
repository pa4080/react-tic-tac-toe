import React from "react";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

export default function Status({ winner, xIsNext }) {
  let message = winner ? "Winner is:" : "Next player is:";

  return (
    <div className="inline-flex items-center font-sans text-xl mb-4">
      {message}&nbsp;
      {!winner && ((xIsNext && <PlayerStar />) || <PlayerHeart />)}
      {(winner === "X" && <PlayerStar />) ||
        (winner === "O" && <PlayerHeart />)}
    </div>
  );
}
