import React from "react";
import PlayerCog from "./players/PlayerCog";
import ToggleSwitch from "./ToggleSwitch";

export default function GameAutoplay({
  autoplay,
  setAutoplay,
  players,
  setPlayers,
  xIsNext,
  setNewGame
}) {
  function handleSetAutoplay(trigger) {
    let newPlayers;
    let newPlayer1 = xIsNext && players.player1 === "Star" ? "Star" : "Heart";

    if (trigger) {
      newPlayers = {
        player1: newPlayer1,
        player2: "Cog"
      };
    } else {
      newPlayers = {
        player1: "Star",
        player2: "Heart"
      };
    }

    setPlayers(newPlayers);
    setAutoplay(trigger);
    setNewGame((prev) => !prev);
  }

  return (
    <div className="game-autoplay relative">
      <ToggleSwitch
        switch={(trigger) => handleSetAutoplay(trigger)}
        label={"Vs Computer"}
        default={autoplay}
      />
      {autoplay && (
        <div className="absolute scale-75 -top-5 -right-10">
          <PlayerCog />
        </div>
      )}
    </div>
  );
}
