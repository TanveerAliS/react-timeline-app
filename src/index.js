import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./container/TimeLine";
import Header from "./container/Header";

import "./styles/styles.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Timeline />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
