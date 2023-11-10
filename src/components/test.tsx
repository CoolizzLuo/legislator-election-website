import React, { useState } from 'react';
import { Button } from './ui/button';

const Test = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div>{toggle ? 'Hi' : 'Hello'}</div>
      <Button onClick={() => setToggle((prev) => !prev)}>Toggle</Button>
    </>
  );
};

export default Test;
