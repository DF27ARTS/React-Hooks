import { useState, useEffect } from "react";

// const HookUseEffect = () => {
//   const [resouceType, setResourcetype] = useState("posts");
//   const [item, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resouceType}`)
//       .then((response) => response.json())
//       .then((data) => setItems(data));
//   }, [resouceType]);

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourcetype("posts")}>Posts</button>
//         <button onClick={() => setResourcetype("users")}>Users</button>
//         <button onClick={() => setResourcetype("comments")}>Comments</button>
//       </div>
//       <h1>{resouceType}</h1>
//       {item.map((item, index) => {
//         return <div key={index}>{JSON.stringify(item)}</div>;
//       })}
//     </>
//   );
// };

const HookUseEffect = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{windowWidth}</div>;
};

export default HookUseEffect;
