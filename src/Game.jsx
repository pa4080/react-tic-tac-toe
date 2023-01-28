import React, { useEffect, useState } from "react";
import Autoplay from "./components/Autoplay";
import Board from "./components/Board";
import History from "./components/History";
import RestartGame from "./components/RestartGame";
import Status from "./components/Status";
import { calculateNextMove, calculateWinner } from "./helpers/Calculate";
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
  const [nextPlayer, setNextPlayer] = useLocalStorage("X_IS_NEXT", true);
  const [players, setPlayers] = useLocalStorage("PLAYERS", {
    player1: "Star",
    player2: "Heart"
  });

  useEffect(() => {
    if (winner && winner !== "Draw") {
      setNextPlayer(winner === players.player1 ? true : false);
    }

    // This is the actual autoplay logic
    // I didn't succeed to useRef and forwardRef hooks
    // at this point...
    if (autoplay) {
      const current = history[history.length - 1];
      const xIsNext = current.xIsNext;

      if (!xIsNext) {
        // If we pass the players the game becomes too hard!!!
        // So currently "Heart" is the easiest level
        // and "Star" is much harder.
        // Another trick is "< 4" on the condition inside,
        //  if it is "< 3" it becomes unpossible to win :)
        // const [i, x, y] = calculateNextMove(
        //   current.squares,
        //   players.player1,
        //   players.player2
        // );
        const [i, x, y] = calculateNextMove(current.squares);

        const square = document.getElementById(`sq-${i}`);

        const blockTime = current.number === 0 ? 3000 : 1000;

        if (square) {
          // These should be done via states...
          const overlay = document.getElementById("game-board");
          overlay.classList.add("computer-play");

          const button = document.getElementById("game-button");
          const btnText = button.innerHTML;
          button.innerHTML = "Computing....";

          setTimeout(() => {
            square.click();
            button.innerHTML = btnText;

            setTimeout(() => {
              overlay.classList.remove("computer-play");
            }, 200);
          }, blockTime);
        }
      }
    }
  }, [stepNumber]);

  /**
   * Probably we may need to reset xIsNext completely here,
   * when we change the mode from 1v1 1vPC...
   * Actually 'xIsNext===true' now means 'players.player1' is next
   * and in 1vPC mode 'players.player1' is the human.
   */
  // Switch between 1v1 and 1vPC
  useEffect(() => {
    // if (newGame) {
    setGameHistory(initState);
    setStepNumber(0);
    setNewGame(true);
    // }
  }, [players, autoplay]);

  // Press the Restart Game button
  useEffect(() => {
    if (newGame) {
      setGameHistory(initState);
      setStepNumber(0);
    }
  }, [newGame, nextPlayer]);

  function handleClick(i, x, y) {
    let history = gameHistory.slice(0, stepNumber + 1); // reset the game from the history, whe continue
    const current = history[history.length - 1]; // get the current game from the history
    const squares = [...current.squares]; // const squares = history.squares.slice();
    let { winner } = calculateWinner(squares);

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (winner || squares[i]) return;

    squares[i] = current.xIsNext ? players.player1 : players.player2;

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

  if (newGame) {
    current.xIsNext = nextPlayer;
  }

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
        setNewGame={setNewGame}
        autoplay={autoplay}
        players={players}
        setPlayers={setPlayers}
        setNextPlayer={setNextPlayer}
      />

      <RestartGame
        setNewGame={setNewGame}
        winner={winner}
        handleClick={handleClick}
        autoplay={autoplay}
        players={players}
      />

      <Autoplay
        autoplay={autoplay}
        setAutoplay={setAutoplay}
        players={players}
        setPlayers={setPlayers}
        xIsNext={nextPlayer}
        setNewGame={setNewGame}
      />

      <History
        history={history}
        current={current}
        setStepNumber={(movie) => setStepNumber(movie)}
        players={players}
        autoplay={autoplay}
      />
    </div>
  );
}

export default Game;
