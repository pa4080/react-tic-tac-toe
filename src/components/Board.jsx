import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClickBoard={() => this.props.onClickGame(i)}
        highlight={
          Array.isArray(this.props.lines) && this.props.lines.includes(i)
        }
      />
    );
  }

  render() {
    let index = 0;

    return (
      <div className="board rounded-lg shadow-xl">
        <table className="board-table rounded-lg bg-white">
          <tbody>
            {[0, 1, 2].map((y) => {
              return (
                <tr key={y}>
                  {[0, 1, 2].map((x) => {
                    return <td key={x}>{this.renderSquare(index++)}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
