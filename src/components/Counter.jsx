import { useState, useEffect } from "react";

const Counter = () => {
  let [counter, setCount] = useState(0);

  useEffect(() => {
    console.log("Counter Mounted when state changes!")
  });

  useEffect(() => {
    console.log("Counter Mounted!")
  });

  useEffect(() => {
    console.log("user updated Counterx && Countery!")
  });

  const inc = () => {
    setCount(counter + 1);
  };

  const dec = () => {
    setCount(counter - 1);
  };
  return (
    <>
      <div>
        <h1>Count:{Counter}</h1>
        <button  onClick={inc}> Increment</button>
        <button  onClick={dec}> Decrement </button>
      </div>
    </>
  );
};

export default Counter;