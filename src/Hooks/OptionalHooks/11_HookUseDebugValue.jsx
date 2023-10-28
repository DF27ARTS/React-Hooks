import React, { useState } from "react";

const HookUseDebugValue = () => {
  const [firstName, setFirstName] = useLocalStorage("firstName", "Tom");
  const [lastName, setLastName] = useState("Holland");

  return (
    <>
      First:{" "}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      Last:{" "}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </>
  );
};

export default HookUseDebugValue;
