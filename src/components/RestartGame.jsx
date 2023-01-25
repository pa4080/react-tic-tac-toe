import React, { useState } from "react";

function RestartGame({ setGameHistory, setStepNumber }) {
  setStepNumber(0);
  // setNewGame(true);

  setGameHistory([
    {
      squares: Array(9).fill(null),
      x: null,
      y: null,
      xIsNext: JSON.parse(localStorage.getItem("X_IS_NEXT")) ?? true,
      number: 0
    }
  ]);
}

function RestartGameButton(props) {
  const [btnChanged, setBtnChanged] = useState(false);

  function handleResetGame() {
    props.setNewGame(true);
    RestartGame(props);

    setTimeout(() => {
      setBtnChanged((prev) => !prev);
    }, 100);
  }

  return (
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
      className={`py-3 px-6 text-center fit-content mt-6 rounded-lg font-bold text-lg text-white transition duration-100 ${
        btnChanged ? "bg-rose-300 shadow-sm" : "bg-rose-500 shadow-md"
      }`}
    >
      {props.winner ? "New Game" : "Restart Game"}
    </button>
  );
}

export { RestartGame };
export default RestartGameButton;
