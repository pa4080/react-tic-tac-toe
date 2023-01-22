import React, { useRef } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helpers/Calculate";

// Disable the hot reload, https://stackoverflow.com/a/74817610/6543935
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());

class Game extends React.Component {
  constructor(props) {
    super(props); // Call the parent's class constructor

    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    // https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
    // const squares = this.props.squares.slice();
    const squares = [...current.squares];

    // Ignoring a click if someone has won the game or if a Square is already filled
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(movie) {
    console.log(movie);
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const movies = history.map((step, movie) => {
      const description = movie ? "Go to movie: #" + movie : "Go to game start";
      return (
        // It’s strongly recommended that you assign
        // proper keys whenever you build dynamic lists.
        // Keys do not need to be globally unique.
        <li key={movie}>
          <button onClick={() => this.jumpTo(movie)}>{description}</button>
        </li>
      );
    });

    let status;

    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClickGame={(i) => {
              this.handleClick(i);
            }}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{movies}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
