import { useEffect, useRef, useState } from "react";

const HookUseRef = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  const renderCount = useRef(0);
  const prevName = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} items</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default HookUseRef;
