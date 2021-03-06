import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

import CalenderBoard from "./components/CalenderBoard/container";
import rootReducer from "./redux/rootReducer";
import Navigation from "./components/Navigation/container"

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
      <Navigation />
      <CalenderBoard />
    </MuiPickersUtilsProvider>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById("root"));
