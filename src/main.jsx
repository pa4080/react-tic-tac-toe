import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/**
 * Get the dedicated in the HTML file element (with id="root")
 * create react Root and render some content.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1>"Hello World!"</h1>);
