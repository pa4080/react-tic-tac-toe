import React from "react";
import PlayerCog from "./players/PlayerCog";
import PlayerDraw from "./players/PlayerDraw";
import PlayerHeart from "./players/PlayerHeart";
import PlayerStar from "./players/PlayerStar";

export default function PlayersMap(player) {
  if (!player) return;
  if (player === "Star") return <PlayerStar />;
  if (player === "Heart") return <PlayerHeart />;
  if (player === "Cog") return <PlayerCog />;
  return <PlayerDraw />;
}
