import React from "react";
import Square from "./Square";

function Board(props) {
  const renderSquare = (i, x, y) => {
    return (
      <Square
        value={props.squares[i]}
        onClickBoard={() => props.onClickGame(i, x, y)}
        highlight={Array.isArray(props.lines) && props.lines.includes(i)}
      />
    );
  };

  let index = 0;

  return (
    <div className="board rounded-lg shadow-xl">
      <table className="board-table rounded-lg bg-white">
        <tbody>
          {[1, 2, 3].map((y) => {
            return (
              <tr key={y}>
                {[1, 2, 3].map((x) => {
                  return <td key={x}>{renderSquare(index++, x, y)}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Board;
