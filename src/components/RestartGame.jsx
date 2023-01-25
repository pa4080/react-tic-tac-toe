import React, { useState } from "react";

export default function RestartGame({ setGameHistory, setStepNumber }) {
  const [resetGame, setResetGame] = useState(false);

  function handleResetGame() {
    const xIsNext = JSON.parse(localStorage.getItem("X_IS_NEXT")) ?? true;
    setGameHistory([
      {
        squares: Array(9).fill(null),
        x: null,
        y: null,
        xIsNext: xIsNext,
        number: 0
      }
    ]);

    setStepNumber(0);
    setResetGame(true);

    setTimeout(() => {
      setResetGame(false);
    }, 200);
  }

  return (
    <button
      aria-label="Restart Game"
      onClick={() => handleResetGame()}
      className={`py-3 px-6 text-center fit-content mt-6 rounded-lg font-bold text-lg text-white transition duration-100 ${
        resetGame ? "bg-gray-500 shadow-sm" : "bg-rose-500 shadow-md"
      }`}
    >
      Restart Game
    </button>
  );
}
