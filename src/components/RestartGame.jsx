import React, { useState } from "react";

function RestartGame({ setNewGame, winner, autoplay, handleClick, players }) {
  const [btnChanged, setBtnChanged] = useState(false);

  function handleResetGame() {
    setNewGame(true);

    setTimeout(() => {
      setBtnChanged((prev) => !prev);
    }, 100);
  }

  return (
    <div className="mt-6 mb-10">
      <button
        aria-label="Restart Game or Next Game"
        onMouseUp={handleResetGame}
        onMouseDown={() => {
          setBtnChanged((prev) => !prev);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setBtnChanged(false);
          }, 150);
        }}
        className={`py-3 px-6 text-center fit-content rounded-lg font-bold text-lg text-white transition duration-100 ${
          btnChanged ? "bg-rose-300 shadow-sm" : "bg-rose-500 shadow-md"
        }`}
      >
        {winner ? "New Game" : "Restart Game"}
      </button>
    </div>
  );
}

export default RestartGame;
