import React, { useState } from "react";
function Counter() {
  //examples of different states being called in one function. state never changes the actual value, it just manipulates the way it appears on state. start a game at 100 hp, as game goes on, you lose hp and the initial state hp must be manipulated.
  // const [count, setCount] = useState(0); // [state, setstate] pattern should generally be followed
  // const [name, setName] = useState('Eddy');
  // const [health, setHealth] = useState(100);

  //Old Way
  // const countState = useState(0);
  // const count = countState[0];
  // const setCount = countState[1];

  //Array Deconstructor
  const [count, setCount] = useState(0);
  //assigns initial state and state manipulation
  const handleIncrement = () => {
    setCount(count + 1);
  };
  //manipulates the state by adding one
  const handleDecrement = () => {
    setCount(count - 1);
  };
  //manipulates the state by subtracting one

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
    </>
  );
}

export default Counter;
