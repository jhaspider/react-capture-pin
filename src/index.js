import React from "react";
import ReactDOM from "react-dom";
import CaptureInput from "./capture_input";

const App = () => {
  return (
    <div className="landing">
      <div className="container">
        <h1>Capture Isolated Inputs</h1>
        <p>A cleaner and whole new different out-of-the-box approach to capture PINs or isolated key inputs.</p>
        <p>It can be used with a plain JavaScript project as well. Just look at the code, should be very easy to leverage.</p>
        <p style={{ color: "red" }}>Although It discourages a blind copy/paste of the code. Should be analysed and used conciously.</p>
        <h2>Why not use equivalent number of Input boxes?</h2>
        <p>Not using input boxes makes thing much easier. Here are the issues that I faced with input boxes :</p>
        <ul>
          <li>Unnecessary flexbility to users to navigate across the boxes.</li>
          <li>Lag observed while moving the focus to next/previous sibling boxes.</li>
          <li>Too many scenario handling resulting in much larger &amp; complex code than this.</li>
        </ul>
        <CaptureInput />
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
