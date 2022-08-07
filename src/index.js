import React from "react";
import ReactDOM from "react-dom";
import CaptureInput from "./capture_input";

const App = () => {
  return (
    <div className="container">
      <h1>Capture Isolated Inputs</h1>
      <CaptureInput />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
