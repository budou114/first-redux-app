import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// Actions -> increment, decrement
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// Reducer -> アクションと前の状態を組み合わせて新しい状態に更新する。
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
};

// Store
let store = createStore(countReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);