import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { useLocalStorage } from "../hooks/LocalStorage";
import PlayersMap from "./PlayersMap";

export default function History({
  history,
  current,
  setStepNumber,
  players,
  autoplay
}) {
  const [showHistory, setShowHistory] = useLocalStorage("HIST_SHOW", false);
  const [reverseHistory, setReverseHist] = useLocalStorage("HIST_ORDER", true);

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
          {movie
            ? !step.xIsNext
              ? PlayersMap(players.player1)
              : PlayersMap(players.player2)
            : PlayersMap("Draw")}
        </button>
      </li>
    );
  });

  return (
    <div className="game-history">
      <ToggleSwitch
        switch={(show) => setShowHistory(show)}
        label={"Show history"}
        default={showHistory}
      />

      {showHistory && (
        <>
          <div
            className={`relative w-full cursor-default rounded-lg bg-white py-2 text-left shadow-md focus:outline-none mb-7 ${
              autoplay && "computer-play"
            }`}
          >
            <ol>{reverseHistory ? movies.reverse() : movies}</ol>
          </div>
          <ToggleSwitch
            switch={(order) => setReverseHist(order)}
            label={"History order"}
            default={reverseHistory}
          />
        </>
      )}
    </div>
  );
}
