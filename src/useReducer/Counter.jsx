import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>useState ile sayaç</h1>
      <div className="count">
        <button onClick={()=>setCount(count+1)}>Arttır</button>
        <span>{count}</span>
        <button onClick={()=>setCount(count-1)}>Azalt</button>
      </div>
    </>
  );
};
