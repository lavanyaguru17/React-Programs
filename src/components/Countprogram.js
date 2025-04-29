import React, { useState } from 'react';
function CountProgram() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log("Count is Increment");
  };

  const decrement = () => {
    setCount(count - 1);
    console.log("Count is Decrement");

  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: '50px' }}>Decrement</button>
    </div>
  );
}

export default CountProgram;

