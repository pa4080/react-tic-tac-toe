import React, { useState } from "react";
import SwitchToggle from "./SwitchToggle";
import PlayerDraw from "./PlayerDraw";
import PlayerHeart from "./PlayerHeart";
import PlayerStar from "./PlayerStar";

export default function GameHistory({ history, current, setStepNumber }) {
  const [reverseHistory, setReverseHistory] = useState(false);

  const movies = history.map((step, movie, arr) => {
    const description = movie ? (
      <span className="items-center flex w-full justify-between pr-2">
        <span>{movie === arr.length - 1 ? "Last move" : "Go to move"}:</span>
        <span>
          #{movie}&nbsp; [x:{step.x}, y:{step.y}]
        </span>
      </span>
    ) : (
      <span>Go to game start</span>
    );

    return (
      <li
        key={movie}
        className={`py-2 px-2 text-lg${
          current.number === step.number ? " bg-orange-100" : ""
        }`}
      >
        <button
          aria-label="History jump"
          onClick={() => setStepNumber(movie)}
          className="items-center flex w-full justify-between"
        >
          {description}
          {movie ? (
            !step.xIsNext ? (
              <PlayerStar />
            ) : (
              <PlayerHeart />
            )
          ) : (
            <PlayerDraw />
          )}
        </button>
      </li>
    );
  });

  return (
    <div className="game-history mt-10 pb-10">
      <div>
        <SwitchToggle
          switch={(order) => setReverseHistory(order)}
          label={"History order switch"}
        />
      </div>

      <div className="relative w-full cursor-default rounded-lg bg-white py-2 text-left shadow-md focus:outline-none">
        <ol>{reverseHistory ? movies.reverse() : movies}</ol>
      </div>
    </div>
  );
}
