import React from "react";
import Board from "./components/Board";
import PlayerHeart from "./components/PlayerHeart";
import PlayerStar from "./components/PlayerStar";
import Status from "./components/Status";
import TestListBox from "./components/TestListBox";
import { calculateWinner } from "./helpers/Calculate";

// Disable the hot reload, https://stackoverflow.com/a/74817610/6543935
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());

class GameTicTacToe extends React.Component {
  constructor(props) {
    super(props); // Call the parent's class constructor

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          x: null,
          y: null,
          xIsNext: true,
          number: 0
        }
      ],
      stepNumber: 0
    };
  }

  handleClick(i, x, y) {
    // console.log(i, x + 1, y + 1);

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares]; // const squares = this.props.squares.slice();

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (calculateWinner(squares).winner || squares[i]) return;

    squares[i] = current.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([
        {
          squares: squares,
          x: x,
          y: y,
          xIsNext: !current.xIsNext,
          number: history.length
        }
      ]),
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    // State Updates are Merged: React will update only the properties mentioned in
    //                           setState method leaving the remaining state as is.
    // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged
    this.setState({
      stepNumber: step
    });
  }

  getPlayer(xIsNext) {
    return xIsNext ? <PlayerStar /> : <PlayerHeart />;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const { winner, lines } = calculateWinner(current.squares);

    const movies = history.map((step, movie) => {
      const description = movie
        ? `Go to movie: #${movie} [x:${step.x}, y:${step.y}]`
        : "Go to game start";

      return (
        // It’s strongly recommended that you assign
        // proper keys whenever you build dynamic lists.
        // Keys do not need to be globally unique.
        <li
          key={movie}
          className={`py-2 px-2 text-lg${
            current.number === step.number ? " bg-orange-100" : ""
          }`}
        >
          <button
            onClick={() => this.jumpTo(movie)}
            className="items-center flex w-full justify-between"
          >
            <span>{description}</span>
            {movie ? this.getPlayer(!step.xIsNext) : ""}
          </button>
        </li>
      );
    });

    return (
      <div className="game ">
        <h1 className="text-3xl font-bold underline mt-10 mb-10">
          Tic Tac Toe
        </h1>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClickGame={(i, x, y) => {
              this.handleClick(i, x, y);
            }}
            lines={lines}
          />
        </div>
        <div className="game-info mt-10">
          <div>
            <Status winner={winner} xIsNext={current.xIsNext} />
          </div>
          {/* <div>
            <TestListBox />
          </div> */}
          <div className="relative w-full cursor-default rounded-lg bg-white py-2 text-left shadow-md focus:outline-none">
            <ol>{movies}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTicTacToe;
