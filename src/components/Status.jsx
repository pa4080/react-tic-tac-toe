import React, { useState } from "react";
import PlayerDraw from "./PlayerDraw";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";
import ToggleSwitch from "./ToggleSwitch";
import { RestartGame } from "./RestartGame";

export default function Status({
  winner,
  xIsNext,
  setGameHistory,
  stepNumber,
  setStepNumber,
  newGame
}) {
  let message = winner
    ? winner === "Draw"
      ? "Draw"
      : "Winner"
    : stepNumber
    ? "Next player"
    : "First player";

  const whoIsNext = () => {
    return xIsNext ? <PlayerStar /> : <PlayerHeart />;
  };

  const whoIsWinner = () => {
    if (winner === "X") return <PlayerStar />;
    if (winner === "O") return <PlayerHeart />;
    return <PlayerDraw />;
  };

  const switchPlayers = (trigger) => {
    localStorage.removeItem("X_IS_NEXT");
    localStorage.setItem("X_IS_NEXT", JSON.stringify(trigger));
    RestartGame({ setGameHistory, setStepNumber });
  };

  return (
    <div className="inline-flex items-center font-sans text-xl mb-2 mt-8 relative">
      {message}&nbsp;
      {!winner && whoIsNext()}
      {winner && whoIsWinner()}
      {!stepNumber && newGame && (
        <div className="absolute -top-4 -right-8 scale-75">
          <ToggleSwitch
            switch={(trigger) => {
              switchPlayers(trigger);
            }}
            label={""}
            default={xIsNext}
          />
        </div>
      )}
    </div>
  );
}
