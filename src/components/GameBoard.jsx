import React from "react";
import Square from "./Square";

function Board(props) {
  function renderSquare(i, x, y) {
    return (
      <Square
        value={props.squares[i]}
        onClickBoard={() => {
          props.onClickGame(i, x, y);
          props.setNewGame(false);
        }}
        highlight={Array.isArray(props.lines) && props.lines.includes(i)}
      />
    );
  }

  let index = 0;

  return (
    <div className="game-board">
      <div className="board rounded-lg shadow-xl">
        <table className="board-table rounded-lg bg-white">
          <tbody>
            {[1, 2, 3].map((y) => {
              return (
                <tr key={y}>
                  {[1, 2, 3].map((x) => {
                    return (
                      <td key={x} className="py-1 px-1">
                        {renderSquare(index++, x, y)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Board;
