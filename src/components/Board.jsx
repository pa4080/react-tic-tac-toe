import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClickBoard={() => this.props.onClickGame(i)}
      />
    );
  }

  render() {
    return (
      <div className="board rounded-lg shadow-xl">
        <table className="board-table rounded-lg bg-white">
          <tbody>
            <tr>
              <td>{this.renderSquare(0)}</td>
              <td>{this.renderSquare(1)}</td>
              <td>{this.renderSquare(2)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(3)}</td>
              <td>{this.renderSquare(4)}</td>
              <td>{this.renderSquare(5)}</td>
            </tr>
            <tr>
              <td>{this.renderSquare(6)}</td>
              <td>{this.renderSquare(7)}</td>
              <td>{this.renderSquare(8)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
