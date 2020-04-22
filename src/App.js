import React from "react";
import { receipts } from "./data/receipts";
import Cover from "./components/Cover";
import Intro from "./components/Intro";
import List from "./components/List";
import Nav from "./components/Nav";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Cover />
        <Intro />
        <List receipts={receipts} />
        <Nav />
      </div>
    </div>
  );
}

export default App;
