import React from "react";

// Disable the hot reload, https://stackoverflow.com/a/74817610/6543935
// if (import.meta.hot) import.meta.hot.accept(() => import.meta.hot.invalidate());

function Square(props) {
  return (
    <button className="square" onClick={props.onClickBoard}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  constructor(props) {
    super(props); // Call the parent's class constructor

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    // https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
    // const squares = this.state.squares.slice();
    const squares = [...this.state.squares];
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        // onClickBoard() doesn't use any parameters, so we
        // should not pass any arguments when call it!
        onClickBoard={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
