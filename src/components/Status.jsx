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
  setIsXNext
}) {
  const message = winner
    ? winner === "Draw"
      ? "Draw"
      : "Winner"
    : stepNumber
    ? "Next player"
    : autoplay
    ? "Choose player"
    : "First player";

  const whoIsNext = () => {
    if (autoplay && newGame) {
      return PlayersMap(players.player1);
    }
    return xIsNext ? PlayersMap(players.player1) : PlayersMap(players.player2);
  };

  const switchPlayers = (trigger) => {
    setIsXNext(trigger);
  };

  const selectPlayer = (trigger) => {
    let newPlayers;

    if (autoplay && newGame) {
      newPlayers = {
        player1: trigger ? "Star" : "Heart",
        player2: "Cog"
      };
    } else {
      newPlayers = {
        player1: "Star",
        player2: "Heart"
      };
    }

    setPlayers(newPlayers);
  };

  function whoIsWinner() {
    return PlayersMap(winner);
  }

  return (
    <div className=" inline-flex items-center font-sans text-xl mb-2 mt-8 relative">
      {message}&nbsp;
      {!winner && whoIsNext()}
      {winner && whoIsWinner()}
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
              default={players.player1 === "Star"}
              colorLeft={"bg-rose-300"}
              colorRight={"bg-gold-primary"}
            />
          )}
        </div>
      )}
    </div>
  );
}
