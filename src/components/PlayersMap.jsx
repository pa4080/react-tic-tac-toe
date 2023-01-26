import React from "react";
import PlayerCog from "./PlayerCog";
import PlayerDraw from "./PlayerDraw";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

export default function PlayersMap(player) {
  if (!player) return;
  if (player === "Star") return <PlayerStar />;
  if (player === "Heart") return <PlayerHeart />;
  if (player === "Cog") return <PlayerCog />;
  return <PlayerDraw />;
}
