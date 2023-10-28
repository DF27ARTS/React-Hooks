/* _____ Example one _____ */
import React, { useRef, useState, useImperativeHandle } from "react";

// export default React.forwardRef(CustomInput)
const CustomInput = React.forwardRef(function ({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert("Hi") };
    },
    []
  );

  return (
    <input
      ref={ref}
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  );
});

const HookUseInperativeHandle = () => {
  const [value, setValue] = useState();
  const inputRef = useRef();

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}>Focus</button>
    </>
  );
};

export default HookUseInperativeHandle;
