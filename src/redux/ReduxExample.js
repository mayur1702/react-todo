import React, { Fragment } from 'react';
import { createStore } from 'redux';

// create actions
const increment = () => {
  return {
    type: 'increment'
  };
};

const decrement = () => {
  return {
    type: 'decrement'
  };
};

// reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      break;
  }
};

//store
const store = createStore(counter);

// subscribe to store
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());

const ReduxExample = () => {
  return (
    <Fragment>
      <button onClick={() => store.dispatch(increment())}>increment</button>
      <button onClick={() => store.dispatch(decrement())}>decrement</button>
    </Fragment>
  );
};

export default ReduxExample;
