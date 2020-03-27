import React from "react";
import { receipts } from "./data/receipts";
import Cover from "./components/Cover";
import Intro from "./components/Intro";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Cover />
        <Intro />
        <List receipts={receipts} />
      </div>
    </div>
  );
}

export default App;
