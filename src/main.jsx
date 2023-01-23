import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";
import TestListBox from "./components/TestListBox";

/**
 * Get the dedicated in the HTML file element (with id="root")
 * create react Root and render some content.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold underline pt-10 mb-10">Tic Tac Toe</h1>
    <Game />
    {/* <TestListBox /> */}
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>
// );
