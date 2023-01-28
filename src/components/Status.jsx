import React from "react";
import ToggleSwitch from "./ToggleSwitch";
// import { restartGame } from "./RestartGame";
import PlayersMap from "./PlayersMap";

export default function Status({
  winner,
  xIsNext,
  stepNumber,
  newGame,
  autoplay,
  players,
  setPlayers,
  setNextPlayer,
  player1vsPC
}) {
  const message = winner
    ? winner === "Draw"
      ? "Draw"
      : "Winner"
    : stepNumber
    ? "Next player"
    : autoplay
    ? "Choose level"
    : "First player";

  const whoIsNext = () => {
    if (autoplay && newGame) {
      return PlayersMap(players.p1);
    }
    return xIsNext ? PlayersMap(players.p1) : PlayersMap(players.p2);
  };

  // In 1v1 mode
  const switchPlayers = (trigger) => {
    setNextPlayer(trigger);
  };

  // In 1vPC (autoplay) mode
  const selectPlayer = (trigger) => {
    let newPlayers;
    if (trigger) {
      newPlayers = {
        p1: "Star",
        p2: "Cog"
      };
    } else {
      newPlayers = {
        p1: "Heart",
        p2: "Cog"
      };
    }
    setPlayers(newPlayers);
  };

  return (
    <div className=" inline-flex items-center font-sans text-xl mb-2 mt-8 relative">
      {message}&nbsp;
      {!winner && whoIsNext()}
      {winner && PlayersMap(winner)}
      {!stepNumber && newGame && (
        <div className="absolute -top-4 -right-8 scale-75">
          {!autoplay && (
            <ToggleSwitch
              switch={(trigger) => {
                switchPlayers(trigger);
              }}
              label={""}
              default={xIsNext}
              colorLeft={"bg-rose-300"}
              colorRight={"bg-gold-primary"}
            />
          )}
          {autoplay && (
            <ToggleSwitch
              switch={(trigger) => {
                selectPlayer(trigger);
              }}
              label={""}
              default={player1vsPC !== "Heart"}
              colorLeft={"bg-rose-300"}
              colorRight={"bg-gold-primary"}
            />
          )}
        </div>
      )}
    </div>
  );
}
