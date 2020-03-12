import React from "react";
import ReactDOM from "react-dom";

import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import CalenderBoard from "./components/CalenderBoard/index"

const App = () => (
  <div>
    <CalenderBoard />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"));
