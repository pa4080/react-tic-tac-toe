import React from "react";
import Square from "./Square";

function Board(props) {
  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClickBoard={() => props.onClickGame(i)}
        highlight={Array.isArray(props.lines) && props.lines.includes(i)}
      />
    );
  };

  let index = 0;

  return (
    <div className="board rounded-lg shadow-xl">
      <table className="board-table rounded-lg bg-white">
        <tbody>
          {[0, 1, 2].map((y) => {
            return (
              <tr key={y}>
                {[0, 1, 2].map((x) => {
                  return <td key={x}>{renderSquare(index++)}</td>;
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
