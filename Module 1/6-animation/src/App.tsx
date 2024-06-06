import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  ///Chek app.css file
  return (
    <>
      <div className="main">
        <div className="box-1"></div>
        <div className="box-2"></div>
        {/* <h1>Something</h1> */}
      </div>

      <div className="btn-container">
        <button className="btn">Hover me</button>
      </div>

      <div className="wrapper">
        <div className="content"></div>
      </div>

      <div className="loading-container">
        <div className="loading">
          <div className="glass"></div>
          <div className="loading-content"></div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <h1>Heading</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            excepturi, suscipit ratione temporibus possimus nulla. Culpa in
            commodi optio sed ipsum molestias et rem? Vel cumque culpa deserunt
            pariatur sed?
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
