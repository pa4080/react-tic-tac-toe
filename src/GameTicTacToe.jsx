import React from "react";
import Board from "./components/Board";
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
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
    // const squares = this.props.squares.slice();
    const squares = [...current.squares];

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (calculateWinner(squares).winner || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([{ squares: squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    // State Updates are Merged: React will update only the properties mentioned in
    //                           setState method leaving the remaining state as is.
    // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-are-merged
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const { winner, lines } = calculateWinner(current.squares);

    const movies = history.map((step, movie) => {
      const description = movie ? "Go to movie: #" + movie : "Go to game start";
      return (
        // It’s strongly recommended that you assign
        // proper keys whenever you build dynamic lists.
        // Keys do not need to be globally unique.
        <li key={movie} className="py-2">
          <button onClick={() => this.jumpTo(movie)}>{description}</button>
        </li>
      );
    });

    return (
      <div className="game ">
        <h1 className="text-3xl font-bold underline pt-10 mb-10">
          Tic Tac Toe
        </h1>
        <div className="game-board">
          <Board
            squares={current.squares}
            onClickGame={(i) => {
              this.handleClick(i);
            }}
            lines={lines}
          />
        </div>
        <div className="game-info mt-10">
          <div>
            <Status winner={winner} xIsNext={this.state.xIsNext} />
          </div>
          {/* <div>
            <TestListBox />
          </div> */}
          <div className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <ol>{movies}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default GameTicTacToe;
