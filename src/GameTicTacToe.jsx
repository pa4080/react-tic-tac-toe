import React, { useState } from "react";
import Board from "./components/Board";
import PlayerHeart from "./components/PlayerHeart";
import PlayerStar from "./components/PlayerStar";
import Status from "./components/Status";
import SwitchToggle from "./components/SwitchToggle";
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
  const [reverseHistory, setReverseHistory] = useState(false);
  const [resetGame, setResetGame] = useState(false);

  function handleResetGame() {
    setGameHistory([
      {
        squares: Array(9).fill(null),
        x: null,
        y: null,
        xIsNext: true,
        number: 0
      }
    ]);

    setStepNumber(0);
    setResetGame(true);

    setTimeout(() => {
      setResetGame(false);
    }, 100);
  }

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

  function jumpTo(step) {
    setStepNumber(step);
  }

  function getPlayer(xIsNext) {
    return xIsNext ? <PlayerStar /> : <PlayerHeart />;
  }

  function handleSwitchOrder(order) {
    setReverseHistory(order);
  }

  /**
   * Render the output
   */
  const history = [...gameHistory];
  const current = history[stepNumber];
  const { winner, lines } = calculateWinner(current.squares);

  const movies = history.map((step, movie, arr) => {
    const description = movie ? (
      <span className="items-center flex w-full justify-between pr-2">
        <span>
          {movie === arr.length - 1 ? "Last move" : "Go to move"}: #{movie}
        </span>
        <span>
          [x:{step.x}, y:{step.y}]
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
          onClick={() => jumpTo(movie)}
          className="items-center flex w-full justify-between"
        >
          {description}
          {movie ? getPlayer(!step.xIsNext) : ""}
        </button>
      </li>
    );
  });

  return (
    <div className="game pt-10">
      <h1 className="text-3xl font-bold underline mb-10 text-gray-700">
        Tic Tac Toe
      </h1>
      <div className="game-board">
        <Board
          squares={current.squares}
          onClickGame={(i, x, y) => {
            handleClick(i, x, y);
          }}
          lines={lines}
        />
      </div>

      <div className="mt-6">
        <Status winner={winner} xIsNext={current.xIsNext} />
      </div>

      <button
        aria-label="Restart Game"
        onClick={() => handleResetGame()}
        className={`py-3 px-6 text-center fit-content mt-6 rounded-lg font-bold text-lg text-white transition duration-100 ${
          resetGame ? "bg-red-400 shadow-sm" : "bg-red-500 shadow-md"
        }`}
      >
        Restart Game
      </button>
      <div className="game-info mt-10 pb-10">
        <div>
          <SwitchToggle switch={(order) => handleSwitchOrder(order)} />
        </div>

        <div className="relative w-full cursor-default rounded-lg bg-white py-2 text-left shadow-md focus:outline-none">
          <ol>{reverseHistory ? movies.reverse() : movies}</ol>
        </div>
      </div>
    </div>
  );
}

export default GameTicTacToe;
