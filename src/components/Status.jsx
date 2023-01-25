import React from "react";
import PlayerDraw from "./PlayerDraw";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";
import ToggleSwitch from "./ToggleSwitch";

export default function Status({ winner, xIsNext }) {
  let message = winner
    ? winner === "Draw"
      ? "Draw"
      : "Winner is"
    : "Next player is";

  return (
    <div className="inline-flex items-center font-sans text-xl mb-2 mt-8">
      {message}&nbsp;
      {!winner && ((xIsNext && <PlayerStar />) || <PlayerHeart />)}
      {(winner === "X" && <PlayerStar />) ||
        (winner === "O" && <PlayerHeart />) ||
        (winner === "Draw" && <PlayerDraw />)}
      {/* <ToggleSwitch
        switch={(show) => {
          console.log();
        }}
        label={""}
        default={"showHistory"}
      /> */}
    </div>
  );
}
