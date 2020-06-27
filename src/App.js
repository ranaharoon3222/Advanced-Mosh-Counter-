import React, { useState } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Styles from './assets/css/styles.jsx';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

const useStyles = makeStyles(Styles);

const App = () => {
  const [Count, setCounter] = useState({
    counters: [
      { id: 1, value: 100 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 },
    ],
  });

  const inCrement = (counter) => {
    const counters = [...Count.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    setCounter({ counters: counters });
  };
  const decrement = (counter) => {
    const counters = [...Count.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    setCounter({ counters: counters });
  };

  const handleReset = () => {
    const counters = Count.counters.map((item) => {
      item.value = 0;
      return item;
    });
    setCounter({ counters: counters });
  };

  const handleDelete = (counterId) => {
    const filterCounter = Count.counters.filter((c) => c.id !== counterId);
    console.log('test');
    setCounter({ counters: filterCounter });
  };

  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar
        totalCounters={Count.counters.filter((item) => item.value > 0).length}
      />
      <Container maxWidth='md' className={classes.container}>
        <Counters
          counters={Count.counters}
          onDelete={handleDelete}
          onIncrement={inCrement}
          onDecrement={decrement}
          onReset={handleReset}
        />
      </Container>
    </div>
  );
};

export default App;
