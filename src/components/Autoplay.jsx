import React from "react";
import PlayerCog from "./PlayerCog";
import ToggleSwitch from "./ToggleSwitch";

export default function GameAutoplay({ autoplay, setAutoplay }) {
  return (
    <div className="game-autoplay relative">
      <ToggleSwitch
        switch={(trigger) => setAutoplay(trigger)}
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
