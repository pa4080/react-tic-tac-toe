import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Board from "./components/GameBoard";
import GameHistory from "./components/GameHistory";
import RestartGame from "./components/RestartGame";
import Status from "./components/Status";
import { calculateWinner } from "./helpers/Calculate";

// Disable the hot reload, https://stackoverflow.com/a/74817610/6543935
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());

function GameTicTacToe() {
  const [gameHistory, setGameHistory] = useState([
    {
      squares: Array(9).fill(null),
      x: null,
      y: null,
      xIsNext: true,
      number: 0
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);

  function handleClick(i, x, y) {
    const history = gameHistory.slice(0, stepNumber + 1); // reset the game from the history, whe continue
    const current = history[history.length - 1]; // get the current game from the history
    const squares = [...current.squares]; // const squares = history.squares.slice();

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (calculateWinner(squares).winner || squares[i]) return;

    squares[i] = current.xIsNext ? "X" : "O";

    setGameHistory(
      history.concat([
        {
          squares: squares,
          x: x,
          y: y,
          xIsNext: !current.xIsNext,
          number: history.length
        }
      ])
    );

    setStepNumber(history.length);
  }

  /**
   * Render the output
   */
  const history = [...gameHistory];
  const current = history[stepNumber];
  const { winner, lines } = calculateWinner(current.squares);

  return (
    <div className="game pt-10">
      <h1 className="text-7xl font-waltograph mb-5 text-rose-500 opacity-60 hover:opacity-100 cursor-default hover:scale-110 transition-all">
        Tic Tac Toe
      </h1>

      <Board
        squares={current.squares}
        onClickGame={(i, x, y) => {
          handleClick(i, x, y);
        }}
        lines={lines}
      />

      <Status winner={winner} xIsNext={current.xIsNext} />

      <RestartGame
        setGameHistory={setGameHistory}
        setStepNumber={setStepNumber}
      />

      {/* <Dropdown /> */}

      <GameHistory
        history={history}
        current={current}
        setStepNumber={setStepNumber}
      />
    </div>
  );
}

export default GameTicTacToe;
