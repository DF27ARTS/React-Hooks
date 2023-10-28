import { useEffect, useLayoutEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log(count);
  }, [count]);
  b;

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <div>{count}</div>
    </>
  );
};

export default HookUseLayoutEffect;
