import React, { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prev) => prev + value);
  };

  const calculateTotal = () => {
    setDisplay(eval(display).toString());
  };

  const clearDisplay = () => {
    setDisplay("");
  };
  return (
    <div className="calculator flex flex-col justify-start items-start h-screen bg-black">
      <input
        type="text"
        readOnly
        className="border-gray-500 text-3xl p-4 mb-3 text-white font-medium"
        value={display}
      />
      <div className="grid grid-cols-4 gap-4">
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("7")}
        >
          7
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("8")}
        >
          8
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("9")}
        >
          9
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={calculateTotal}
        >
          =
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("4")}
        >
          4
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("5")}
        >
          5
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("6")}
        >
          6
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay(" * ")}
        >
          *
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("1")}
        >
          1
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("2")}
        >
          2
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("3")}
        >
          3
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay(" - ")}
        >
          -
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay(".")}
        >
          .
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay("0")}
        >
          0
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay(" / ")}
        >
          /
        </button>
        <button
          className="w-12 h-12 text-xl rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={() => appendToDisplay(" + ")}
        >
          +
        </button>
        <button
          className="w-12 h-12 text-sm rounded-3xl bg-orange-400 p-2 text-white font-bold"
          onClick={clearDisplay}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default App;
