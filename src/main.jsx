import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>Board</h1>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/**
 * Get the dedicated in the HTML file element (with id="root")
 * create react Root and render some content.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
