import { useState } from "react";

const HookUseState = () => {
  // const [count, setCount] = useState(() => {
  //   console.log("run function");
  //   return 4;
  // });
  const [state, setState] = useState({
    count: 4,
    theme: "blue",
  });

  function decrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  function incrementCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state.count}</span>
      <span>{state.theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default HookUseState;
