import React, { useState } from 'react';

const InputSample = () => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText('');
  };

  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>Reset</button>
      <b>값: {text}</b>
    </div>
  );
};

export default InputSample;
