import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [bgcolor, setBgColor] = useState("black");

  return (
    <div>
      <div
        className="h-[100vh] w-full edit_here duration-2 ease-in"
        style={{ backgroundColor: bgcolor }}
      ></div>
      <div className="All_btns">
        <button
          className="bg-red-800"
          onClick={() => {
            setBgColor("Red");
          }}
        >
          Red
        </button>
        <button
          className="bg-yellow-800"
          onClick={() => {
            setBgColor("Green");
          }}
        >
          Green
        </button>
        <button
          className="bg-blue-900"
          onClick={() => {
            setBgColor("Blue");
          }}
        >
          Blue
        </button>
        <button
          className="bg-gray-900"
          onClick={() => {
            setBgColor("Gray");
          }}
        >
          Gray
        </button>
        <button
          className="bg-yellow-500"
          onClick={() => {
            setBgColor("Yellow");
          }}
        >
          Yellow
        </button>
        <button
          className="bg-pink-500"
          onClick={() => {
            setBgColor("Pink");
          }}
        >
          Pink
        </button>
        <button
          className="bg-pink-800"
          onClick={() => {
            setBgColor("Lavender");
          }}
        >
          Lavender
        </button>
        <button
          className="bg-black"
          onClick={() => {
            setBgColor("black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default App;
