import React, { useState } from 'react';

function Counter() {
  const [value, setValue] = useState(0);
  const onIncrease = () => {
    setValue((a) => a + 1);
    setValue((a) => a + 1);
    console.log(value);
  };
  const onDecrease = () => {
    setValue((a) => a - 1);
  };
  return (
    <>
      {value}
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter;
