import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./components/redux/store";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

ReactDOM.render(
  <React.Fragment>
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.Fragment>,
  document.getElementById("root")
);
