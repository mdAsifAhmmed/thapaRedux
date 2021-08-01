import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="container">
        <h1>Increment / Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="countdiv">
          <a
            className="count_minus"
            title="Decrement"
            onClick={() => dispatch(incNumber())}
          >
            <button>-</button>
          </a>
          <input
            name="quantity"
            type="text"
            className="count__input"
            value={myState}
          />
          <a
            className="count_plus"
            title="Increment"
            onClick={() => dispatch(decNumber())}
          >
            <button>+</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
