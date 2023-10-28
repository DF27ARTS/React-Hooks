import { useEffect, useState, useCallback } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("Updating numbers");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

const HookUseCallback = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + incrementor + 1,
        number + incrementor + 2,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <button onClick={() => setDark((prevValue) => !prevValue)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default HookUseCallback;
