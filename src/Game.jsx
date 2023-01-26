import React, { useEffect, useState } from "react";
import Autoplay from "./components/Autoplay";
import Board from "./components/Board";
import History from "./components/History";
import RestartGameButton from "./components/RestartGame";
import Status from "./components/Status";
import { calculateWinner } from "./helpers/Calculate";
import { useLocalStorage } from "./hooks/LocalStorage";

// Disable the hot reload, https://stackoverflow.com/a/74817610/6543935
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());

function Game() {
  const initState = [
    {
      squares: Array(9).fill(null),
      x: null,
      y: null,
      xIsNext: JSON.parse(localStorage.getItem("X_IS_NEXT")) ?? true,
      number: 0
    }
  ];

  const [gameHistory, setGameHistory] = useState(initState);
  const [stepNumber, setStepNumber] = useState(0);
  const [newGame, setNewGame] = useState(true);

  const [autoplay, setAutoplay] = useLocalStorage("AUTOPLAY", true);
  const [isXNext, setIsXNext] = useLocalStorage("X_IS_NEXT", true);
  const [players, setPlayers] = useLocalStorage("PLAYERS", {
    player1: "Star",
    player2: "Heart"
  });

  useEffect(() => {
    if (winner) {
      setIsXNext(winner === players.player1 ? true : false);
    }
  }, [stepNumber]);

  /**
   * Probably we may need to reset xIsNext completely here,
   * when we change the mode from 1v1 1vPC...
   * Actually 'xIsNext===true' now means 'players.player1' is next
   * and in 1vPC mode 'players.player1' is the human.
   */
  useEffect(() => {
    setGameHistory(initState);
    setStepNumber(0);
    setNewGame(true);
  }, [players, autoplay]);

  useEffect(() => {
    if (newGame) {
      setGameHistory(initState);
      setStepNumber(0);
    }
  }, [newGame, isXNext]);

  function handleClick(i, x, y) {
    const history = gameHistory.slice(0, stepNumber + 1); // reset the game from the history, whe continue
    const current = history[history.length - 1]; // get the current game from the history
    const squares = [...current.squares]; // const squares = history.squares.slice();
    const { winner } = calculateWinner(squares);

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (winner || squares[i]) return;

    squares[i] = current.xIsNext ? players.player1 : players.player2;

    // squares[4] = !current.xIsNext ? players.player1 : players.player2;

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
    <div className="game pt-10 pb-10">
      <h1 className="text-7xl font-waltograph mb-5 text-rose-500 opacity-60 hover:opacity-100 cursor-default hover:scale-110 transition-all">
        Tic Tac Toe
      </h1>

      <Board
        squares={current.squares}
        onClickGame={(i, x, y) => {
          handleClick(i, x, y);
        }}
        lines={lines}
        setNewGame={setNewGame}
      />

      <Status
        winner={winner}
        xIsNext={current.xIsNext}
        stepNumber={stepNumber}
        newGame={newGame}
        autoplay={autoplay}
        players={players}
        setPlayers={setPlayers}
        setIsXNext={setIsXNext}
      />

      <RestartGameButton
        setGameHistory={setGameHistory}
        setStepNumber={setStepNumber}
        winner={winner}
        setNewGame={setNewGame}
      />

      <Autoplay
        autoplay={autoplay}
        setAutoplay={setAutoplay}
        players={players}
        setPlayers={setPlayers}
        xIsNext={current.xIsNext}
      />

      <History
        history={history}
        current={current}
        setStepNumber={(movie) => setStepNumber(movie)}
        players={players}
      />
    </div>
  );
}

export default Game;
