import React from "react";
import PlayerCog from "./PlayerCog";
import ToggleSwitch from "./ToggleSwitch";

export default function GameAutoplay({
  autoplay,
  setAutoplay,
  players,
  setPlayers,
  xIsNext
}) {
  function handleSetAutoplay(trigger) {
    let newPlayers;

    if (trigger) {
      newPlayers = {
        player1: xIsNext ? players.player1 : players.player2,
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
