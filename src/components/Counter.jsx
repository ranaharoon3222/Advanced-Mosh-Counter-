import React from 'react';
import { Badge, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';
import Styles from '../assets/css/styles.jsx';

const useStyles = makeStyles(Styles);

const Counter = (props) => {
  const classes = useStyles();
  let Count = props.counter.value;
  let changeColor = Count === 0 ? 'error' : 'primary'; // (condition) ? true : false
  let formatCounter = Count === 0 ? 'Zero' : Count;

  return (
    <div>
      <Typography variant='h5' className={classes.headings}>
        {props.children}
      </Typography>

      <Badge
        color={changeColor}
        badgeContent={formatCounter}
        className={classes.csBadge}
      ></Badge>
      <Button
        variant='contained'
        color='primary'
        className={classes.csButton}
        onClick={() => props.onIncrement(props.counter)}
      >
        +
      </Button>
      <Button
        variant='contained'
        color='default'
        className={classes.csButton}
        onClick={() => props.onDecrement(props.counter)}
        disabled={Count === 0}
      >
        -
      </Button>

      <Button
        variant='contained'
        color='secondary'
        className={classes.csButton}
        startIcon={<Delete />}
        onClick={() => props.onDelete(props.counter.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Counter;
