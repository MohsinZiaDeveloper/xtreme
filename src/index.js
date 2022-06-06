import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ListImages from "./ListImages";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/imagesList" element={<ListImages />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
