import { useState, useMemo, useEffect } from "react";

const HookUseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(true);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: dark ? "white" : "back",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={(e) => setDark((prevValue) => !prevValue)}>
        {" "}
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(num) {
  console.log("Calling slow Function");
  for (let i = 0; i <= 1_000_000_000; i++) {}
  return num * 2;
}

export default HookUseMemo;
