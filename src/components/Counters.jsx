import React from 'react';
import { Button } from '@material-ui/core';
import Counter from './Counter';

const Counters = ({
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
  counters,
}) => {
  return (
    <div>
      <Button variant='contained' color='primary' onClick={onReset}>
        Reset
      </Button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={onDelete}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        >
          <span>Counter Number #{counter.id}</span>
        </Counter>
      ))}
    </div>
  );
};

export default Counters;
