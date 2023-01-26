import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Game from "./Game";

/**
 * Get the dedicated in the HTML file element (with id="root")
 * create react Root and render some content.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Game />
//   </React.StrictMode>
// );
