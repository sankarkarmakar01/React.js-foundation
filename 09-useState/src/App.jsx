import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function incrementNum() {
    setNum(() => num + 1);
  }
  function decrementNum() {
    setNum(() => num - 1);
  }
  function jumpBy5() {
    setNum(() => num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <span>
        <button onClick={incrementNum} style={{ cursor: "pointer" }}>
          Increment
        </button>
        <button onClick={decrementNum} style={{ cursor: "pointer" }}>
          Decrement
        </button>
        <button onClick={jumpBy5} style={{ cursor: "pointer" }}>
          Jump By 5
        </button>
      </span>
    </div>
  );
};

export default App;
