import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi } from "./math";
import * as pi2 from "./math";

// hellou

ReactDOM.render(
  <ul>
    <li>pi {pi}</li>
    <li>doubled pi {doublePi()}</li>
    <li>pi squared {doublePi() * doublePi()}</li>
    <li>pi object usage {pi2.default}</li>
  </ul>,
  document.getElementById("root")
);
